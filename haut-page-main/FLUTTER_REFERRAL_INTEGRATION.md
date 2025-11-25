# Intégration du système de referral avec Flutter

## Fonctionnement

1. **Sur le web** : La page `/app?referral=CODE` enregistre temporairement le code de referral avec un fingerprint du device
2. **Dans l'app Flutter** : Au premier lancement, l'app récupère les referrals récents qui matchent son fingerprint
3. **Matching** : On utilise plusieurs critères pour matcher (User Agent, timezone, résolution écran, etc.)

## API Endpoints nécessaires

### 1. Enregistrer un referral (déjà implémenté dans Referral.tsx)
```
POST https://usermicroservice-6axcnmwbwq-ew.a.run.app/referralCode

Body: {
  "tempId": "string", 
  "referralCode": "string",
  "fingerprint": "string", // SHA-256 hash du fingerprint pour privacy
  "timestamp": number,
  "claimed": false,
  "expiresAt": number
}
```

### 2. Récupérer les referrals disponibles (à créer côté backend)
```
POST https://usermicroservice-6axcnmwbwq-ew.a.run.app/referralCode/claim

Body: {
  "fingerprintHash": "string" // SHA-256 hash du fingerprint généré côté Flutter
}

Response: {
  "referralCode": "string",
  "tempId": "string",
  "matchScore": number // score de correspondance 0-100
}
```

## Côté Flutter - Code exemple

### 1. Générer le fingerprint device dans Flutter
```dart
import 'dart:io';
import 'dart:convert';
import 'package:crypto/crypto.dart';
import 'package:device_info_plus/device_info_plus.dart';

class DeviceFingerprint {
  static Future<String> getFingerprintHash() async {
    // Get IP address from external service (same as web)
    String ipAddress = 'unknown';
    try {
      final ipResponse = await http.get(Uri.parse('https://api.ipify.org?format=json'));
      if (ipResponse.statusCode == 200) {
        final ipData = json.decode(ipResponse.body);
        ipAddress = ipData['ip'];
      }
    } catch (error) {
      print('Could not get IP address: $error');
    }

    // Get logical screen resolution (same as web)
    final window = WidgetsBinding.instance.window;
    final devicePixelRatio = window.devicePixelRatio;
    final logicalSize = window.physicalSize / devicePixelRatio;
    final screenResolution = '${logicalSize.width.round()}x${logicalSize.height.round()}';
    final deviceRatio = ((logicalSize.width * 100 / logicalSize.height) / 100).round();
    
    // Normalize platform to match web format
    String normalizedPlatform = 'unknown';
    if (Platform.isAndroid) normalizedPlatform = 'android';
    else if (Platform.isIOS) normalizedPlatform = 'ios';
    
    // Get timezone offset in minutes (same as web)
    final timezoneOffset = DateTime.now().timeZoneOffset.inMinutes;
    
    // Create the same fingerprint structure as web
    final fingerprint = {
      'ipAddress': ipAddress,
      'language': Platform.localeName.split('_')[0], // Just 'en', 'fr', etc.
      'platform': normalizedPlatform,
      'timezoneOffset': timezoneOffset,
      'screenResolution': screenResolution,
      'deviceRatio': deviceRatio,
    };
    
    print('Flutter fingerprint object: $fingerprint');
    
    // Créer le même format qu'en JavaScript
    final fingerprintString = jsonEncode(fingerprint);
    
    // Hash SHA-256 comme côté web
    final bytes = utf8.encode(fingerprintString);
    final digest = sha256.convert(bytes);
    
    return digest.toString();
  }
}
```

### 2. Récupérer le referral au premier lancement
```dart
import 'package:http/http.dart' as http;
import 'dart:convert';

class ReferralService {
  static const String baseUrl = 'https://usermicroservice-6axcnmwbwq-ew.a.run.app';
  
  static Future<String?> claimReferral() async {
    try {
      // Vérifier si on a déjà un referral code
      final prefs = await SharedPreferences.getInstance();
      final existingReferral = prefs.getString('referral_code');
      if (existingReferral != null) {
        return existingReferral; // Déjà récupéré
      }
      
      // Générer le hash du fingerprint
      final fingerprintHash = await DeviceFingerprint.getFingerprintHash();
      
      // Appeler l'API pour récupérer un referral disponible
      final response = await http.post(
        Uri.parse('$baseUrl/referralCode/claim'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({
          'fingerprintHash': fingerprintHash,
        }),
      );
      
      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        final referralCode = data['referralCode'] as String?;
        
        if (referralCode != null) {
          // Sauvegarder le referral code
          await prefs.setString('referral_code', referralCode);
          await prefs.setString('referral_temp_id', data['tempId']);
          
          print('Referral code récupéré: $referralCode');
          return referralCode;
        }
      }
      
      return null; // Aucun referral trouvé
    } catch (e) {
      print('Erreur lors de la récupération du referral: $e');
      return null;
    }
  }
}
```

### 3. Utiliser dans votre app
```dart
class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  String? referralCode;
  
  @override
  void initState() {
    super.initState();
    _checkForReferral();
  }
  
  Future<void> _checkForReferral() async {
    // Attendre un peu pour que l'app soit complètement chargée
    await Future.delayed(Duration(seconds: 2));
    
    final referral = await ReferralService.claimReferral();
    if (referral != null) {
      setState(() {
        referralCode = referral;
      });
      
      // Traiter le referral code (ex: envoyer à votre analytics, etc.)
      _handleReferralCode(referral);
    }
  }
  
  void _handleReferralCode(String code) {
    // Votre logique pour traiter le code de referral
    print('Code de referral reçu: $code');
    
    // Exemple: envoyer à votre service d'analytics
    // Analytics.track('referral_claimed', {'code': code});
    
    // Exemple: afficher une popup de bienvenue
    // showReferralWelcomeDialog();
  }
}
```

## Points importants

1. **Timing** : L'app Flutter doit essayer de récupérer le referral dans les 24h après la visite web (expiration)
2. **Une seule fois** : Une fois qu'un referral est récupéré par l'app, il est marqué comme "claimed" 
3. **Matching** : Le backend doit implémenter une logique de matching basée sur le fingerprint
4. **Fallback** : Si plusieurs referrals matchent, prendre le plus récent

## Dépendances Flutter nécessaires
```yaml
dependencies:
  device_info_plus: ^9.1.0
  shared_preferences: ^2.2.2
  http: ^1.1.0
  crypto: ^3.0.3
```
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEvent } from '@/hooks/useEvent';
import PromotionalCard from '@/components/PromotionalCard';
import ShareSection from '@/components/ShareSection';
import ActivityDetails from '@/components/ActivityDetails';
import AppPromotion from '@/components/AppPromotion';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import HeroSection2 from '@/components/HeroSection2';
import EventPageSkeleton from '@/components/EventPageSkeleton';
import { AlertTriangle, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ANDROID_PACKAGE = 'com.mateappes.mate';
const IOS_APP_ID = '6669137503'; // <-- remplace par votre App Store ID (numérique)
const UNIVERSAL_LINK = 'https://mateapp.es/app'; // <-- page/universal link iOS si dispo
const BACKEND_URL_SAVE = 'https://usermicroservice-6axcnmwbwq-ew.a.run.app/referralCode';

function parseReferralCode(sp: URLSearchParams): string | null {
  // Normalise plusieurs noms de paramètres possibles
  const keys = ['ref', 'referral', 'referralCode', 'r', 'invite'];
  for (const k of keys) {
    const v = sp.get(k);
    if (v && v.trim()) return v.trim();
  }
  return null;
}

function isAndroid() {
  return /Android/i.test(navigator.userAgent);
}

function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

function isMobile() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

async function getOrCreateDeviceId(): Promise<string> {
  let deviceId = localStorage.getItem('deviceId');
  if (!deviceId) {
    // Garde une forme UUID-like (tu peux switcher vers uuid v4 si tu préfères)
    const uuid = crypto.randomUUID?.();
    deviceId = uuid ? 'dev_' + uuid : ('dev_' + Date.now() + '_' + Math.random().toString(36).slice(2));
    localStorage.setItem('deviceId', deviceId);
  }
  return deviceId;
}

async function saveReferralToBackend(payload: any) {
  const res = await fetch(BACKEND_URL_SAVE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Backend error: ${res.status}`);
}

function updateMetaTags(title: string, description: string, image: string, url: string) {
  // Update title
  document.title = title;

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }

  // Update Open Graph meta tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', title);
  }

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', description);
  }

  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) {
    ogImage.setAttribute('content', image);
  }

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) {
    ogUrl.setAttribute('content', url);
  }

  // Update Twitter Card meta tags
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) {
    twitterTitle.setAttribute('content', title);
  }

  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (twitterDescription) {
    twitterDescription.setAttribute('content', description);
  }

  const twitterImage = document.querySelector('meta[name="twitter:image"]');
  if (twitterImage) {
    twitterImage.setAttribute('content', image);
  }
}

const Referral = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showEventPage, setShowEventPage] = useState(false);

  const referralCode = useMemo(() => parseReferralCode(searchParams), [searchParams]);
  const communityId = searchParams.get('community');

  // Fetch event data if community parameter is present
  const { data: event, isLoading: isLoadingEvent, isError: isEventError } = useEvent(communityId || undefined, {
    enabled: !!communityId,
    retry: 1
  });

  // Update metadata when event data is available
  useEffect(() => {
    if (event) {
      const currentUrl = window.location.href;
      const title = `${event.name} - Mate app`;
      const description = `Join "${event.name}" at ${event.address}. ${event.description}`;
      const image = event.image || 'https://mateapp.es/og_image.jpg';

      updateMetaTags(title, description, image, currentUrl);
    }
  }, [event]);

  useEffect(() => {
    const run = async () => {
      try {
        // 1) Desktop → afficher page event
        if (!isMobile()) {
          if(communityId && communityId !== "") {
            setShowEventPage(true);
            setIsProcessing(false);
            return;
          } else {
            navigate('/', { replace: true });
            return;
          }
        }

        // 2) Code obligatoire
        if (!referralCode) {
          if(communityId && communityId !== "") {
            setShowEventPage(true);
            setIsProcessing(false);
            return;
          }

          if (isAndroid()) {
            // ✅ ANDROID: Play Store + INSTALL_REFERRER
            // Le referrer DOIT être encodé. On met une clé explicite (ref=XYZ)
            const playUrl = `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`;
            window.location.replace(playUrl);
            return;
          }

          if (isIOS()) {
            const appStoreUrl = `https://apps.apple.com/app/id${IOS_APP_ID}`;
            window.location.replace(appStoreUrl);
          }

          return;
        }

        // 3) Device ID + envoi backend (utile pour analytics / dédup côté serveur)
        const deviceId = await getOrCreateDeviceId();
        const payload = {
          deviceId,
          referralCode,
          userAgent: navigator.userAgent,
          ts: Date.now(),
          source: 'web_referral',
        };

        // Envoi au backend (best effort)
        try {
          await saveReferralToBackend(payload);
        } catch (e) {
          // On log mais on ne bloque pas la redirection
          console.warn('Referral backend save failed:', e);
        }

        // 4) Redirections spécifiques plateforme
        if (isAndroid()) {
          // ✅ ANDROID: Play Store + INSTALL_REFERRER
          // Le referrer DOIT être encodé. On met une clé explicite (ref=XYZ)
          const referrerParam = encodeURIComponent(`ref=${referralCode}`);
          const playUrl = `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}&referrer=${referrerParam}`;
          window.location.replace(playUrl);
          return;
        }

        if (isIOS()) {
          // ✅ iOS
          // Option A: tenter l’Universal Link si vous l’avez configuré
          // (si l’app est installée, elle s’ouvre et reçoit ?ref=; sinon iOS ouvre la page web)
          if (UNIVERSAL_LINK) {
            const ul = `${UNIVERSAL_LINK}?ref=${encodeURIComponent(referralCode)}`;
            // Essai d'ouverture immédiate
            window.location.href = ul;

            // Petit délai, puis fallback App Store
            setTimeout(async () => {
              // Option B (fallback) : copier le code avant App Store (nécessite parfois un geste utilisateur; on tente quand même)
              try {
                if (navigator.clipboard?.writeText) {
                  await navigator.clipboard.writeText(referralCode);
                  // Idéalement, afficher un toast “Code copié”
                }
              } catch {
                // silence: si refus, on tombera sur l’écran code dans l’app
              }
              const appStoreUrl = `https://apps.apple.com/app/id${IOS_APP_ID}`;
              window.location.replace(appStoreUrl);
            }, 1200);

            setIsProcessing(false);
            return;
          } else {
            // Si pas d’Universal Link, on essaie de copier puis App Store direct
            try {
              if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(referralCode);
              }
            } catch {}
            const appStoreUrl = `https://apps.apple.com/app/id${IOS_APP_ID}`;
            window.location.replace(appStoreUrl);
            return;
          }
        }

        // 5) Autres mobiles: page d’accueil
        navigate('/', { replace: true });
      } catch (e: any) {
        console.error('Referral error:', e);
        setError('Erreur lors du traitement du parrainage.');
      } finally {
        setIsProcessing(false);
      }
    };

    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [referralCode]);

  // Show event page if community parameter is present
  if (showEventPage) {
    // Show skeleton while loading
    if (isLoadingEvent) {
      return <EventPageSkeleton />;
    }

    // Show error state
    if (isEventError || !event) {
      return (
        <div className="min-h-[100dvh] w-full bg-black flex flex-col items-center justify-center p-8">
          <div className="flex flex-col items-center text-center max-w-md space-y-6">
            {/* Error Icon */}
            <div className="relative">
              <AlertTriangle className="w-20 h-20 text-red-500 animate-pulse" />
              <div className="absolute inset-0 w-20 h-20 bg-red-500/20 rounded-full animate-ping" />
            </div>

            {/* Error Message */}
            <div className="text-white space-y-4">
              <h1 className="text-2xl font-bold">Event Not Found</h1>
              <p className="text-gray-300 text-lg">
                The event has not been found or is terminated.
              </p>
            </div>

            {/* Go Back Home Button */}
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
              <Link to="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Go Back Home
              </Link>
            </Button>
          </div>
        </div>
      );
    }

    // Show event page
    return (
      <div className="min-h-[100dvh] w-full bg-black flex flex-col overflow-hidden">
        <div className="flex-1 flex w-full flex-col items-center gap-[60px] pt-3 px-[60px] max-md:gap-8 max-md:pt-2 max-md:px-10 max-sm:gap-6 max-sm:pt-2 max-sm:px-5">
          <div className="flex flex-col items-start gap-[15px] self-stretch">
            <Navigation />
          </div>

          {/* Two-column layout for hero section with aligned heights */}
          <div className="flex items-stretch gap-5 self-stretch max-lg:flex-col max-lg:gap-[20px]">
            <div className="flex-1">
              <HeroSection2 event={event} />
            </div>

            {/* Right section with PromotionalCard */}
            <div className="w-[503px] max-lg:w-full">
              <PromotionalCard event={event} />
            </div>
          </div>

          {/* ShareSection shown only on mobile, above ActivityDetails */}
          <div className="hidden max-md:block self-stretch">
            <ShareSection event={event} />
          </div>

          <main className="flex items-start gap-5 self-stretch max-md:flex-col max-md:gap-[20px]">
            <ActivityDetails event={event} />

            <aside className="flex w-[503px] flex-col items-start gap-5 max-md:w-full max-md:hidden">
              <ShareSection event={event} />
              <AppPromotion event={event} />
            </aside>

            {/* AppPromotion shown only on mobile, below ActivityDetails */}
            <div className="hidden max-md:block self-stretch">
              <AppPromotion event={event} />
            </div>
          </main>
        </div>

        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
          <div className="text-center">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Erreur</h1>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={() => navigate('/', { replace: true })}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
            >
              Revenir à l'accueil
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <div className="text-center">
          {isProcessing ? (
            <>
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Redirection…</h1>
              <p className="text-gray-600">
                Nous traitons votre code parrain et ouvrons la boutique d'apps.
              </p>
            </>
          ) : (
            <>
              <div className="text-green-500 text-6xl mb-4">✅</div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">C'est parti</h1>
              <p className="text-gray-600">
                Si rien ne s'ouvre, <a className="text-blue-600 underline" href="/">retour à l'accueil</a>.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Referral;

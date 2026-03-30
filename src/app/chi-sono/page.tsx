import Image from "next/image";
import { SmartLink } from "@/components/smart-link";
import { getDemoParams } from "@/lib/demo-params";

export const metadata = { title: "Chi Sono | Lumina Psicologo" };

export default async function ChiSonoPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await getDemoParams(searchParams);
  
  const imageUrl = params.isFemale 
    ? "/Assets/psychologist-portrait-f.webp"
    : "/Assets/psychologist-portrait-m.webp";

  return (
    <div className="py-24 bg-background min-h-[calc(100vh-140px)]">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-secondary-foreground font-heading text-4xl md:text-5xl font-semibold mb-8 text-center">
          Profilo Professionale
        </h1>
        <div className="flex flex-col md:flex-row gap-12 items-start mt-12 md:mt-16">
          <div className="w-full md:w-1/3 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl shrink-0">
            <Image
              src={imageUrl}
              alt={`Ritratto di ${params.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
          <div className="w-full md:w-2/3 prose prose-lg prose-slate text-foreground/80">
            <h2 className="text-3xl font-medium text-primary mb-6">
              {params.name} <span className="text-foreground/50 font-normal">| {params.fieldDisplay}</span>
            </h2>
            <p className="mb-4">
              La {params.name} è una psicologa e psicoterapeuta che opera e riceve principalmente nella città di Venezia. Il mio obiettivo è offrire uno spazio clinico di alta professionalità, basato sull&apos;empatia, sulla fiducia e sull&apos;ascolto attento.
            </p>

            <h3 className="text-xl font-medium text-secondary-foreground mt-8 mb-2">Specializzazione</h3>
            <p className="mb-4">
              Sono specializzata in psicoterapia presso il <strong>CISSPAT</strong> (Centro Italiano Studio Sviluppo Psicoterapia a Breve Termine) di Padova. Questo approccio è studiato per focalizzarsi attivamente sul cambiamento nel momento presente, fornendo strumenti concreti per superare i blocchi emotivi a breve termine.
            </p>

            <h3 className="text-xl font-medium text-secondary-foreground mt-8 mb-2">Esperta EMDR</h3>
            <p className="mb-4">
              Sono stabilmente abilitata all&apos;utilizzo della tecnica <strong>EMDR</strong> (Eye Movement Desensitization and Reprocessing), un metodo clinicamente testato ed estremamente efficace per il trattamento avanzato di traumi pregressi e dello stress emotivo acuto.
            </p>

            <h3 className="text-xl font-medium text-secondary-foreground mt-8 mb-2">Ambiti di Intervento</h3>
            <p className="mb-4">
              Mi occupo di consulenza psicologica e percorsi terapeutici su misura rivolti a individui singoli, coppie o gruppi. Tratto in maniera approfondita problematiche e sintomatologie cliniche come stati d&apos;ansia, depressione e disturbi della personalità.
            </p>

            <h3 className="text-xl font-medium text-secondary-foreground mt-8 mb-2">Collaborazioni nel Territorio</h3>
            <p className="mb-8">
              Negli anni ho maturato esperienza e ho lavorato a diversi progetti attivi sul territorio, che includono interventi all&apos;interno delle scuole e preziose collaborazioni professionali con enti di spicco come l&apos;Associazione Amici dell&apos;Ordine di Malta.
            </p>
            
            <SmartLink
              href="/contatti"
              className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md text-lg font-medium transition-all shadow-md mt-4 no-underline"
            >
              Prenota un primo colloquio
            </SmartLink>
          </div>
        </div>
      </div>
    </div>
  );
}

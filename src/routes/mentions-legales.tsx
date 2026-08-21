import { createFileRoute } from "@tanstack/react-router";
import { BRAND } from "@/data/brand";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — Meuble Amri" },
      {
        name: "description",
        content: "Mentions légales et politique de confidentialité du showroom Meuble Amri.",
      },
    ],
  }),
  component: Legal,
});

function Legal() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <p className="eyebrow text-mauve">Informations</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Mentions légales</h1>
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">Éditeur</h2>
            <p className="mt-3">
              Le site est édité par {BRAND.name}, showroom de meubles et de
              décoration d'intérieur. Adresse : {BRAND.address}. Téléphone :{" "}
              {BRAND.phone}. E-mail : {BRAND.email}.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-foreground">Objet</h2>
            <p className="mt-3">
              Ce site vitrine présente les collections, packs et coordonnées du
              showroom. Les prix affichés sont indicatifs et peuvent être
              confirmés en magasin.
            </p>
          </section>
          <section id="confidentialite">
            <h2 className="text-2xl font-semibold text-foreground">
              Politique de confidentialité
            </h2>
            <p className="mt-3">
              Les informations collectées via le formulaire de contact (nom,
              e-mail, téléphone, message) servent uniquement à répondre à votre
              demande. Elles ne sont ni vendues ni cédées à des tiers. Vous
              pouvez demander la suppression de vos données en écrivant à{" "}
              {BRAND.email}.
            </p>
          </section>
        </div>
      </Reveal>
    </div>
  );
}

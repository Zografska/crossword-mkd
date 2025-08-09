import type { Route } from "./+types/about";
import React from "react";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { BookOpen, Sparkles, ShieldCheck, Mail } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const Feature: React.FC<{
  icon: React.ReactNode;
  title: string;
  desc: string;
}> = ({ icon, title, desc }) => {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold">{title}</h4>
        <p className="text-sm text-muted-foreground mt-1">{desc}</p>
      </div>
    </div>
  );
};

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto p-6 lg:p-12">
      <section className="grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight">
            Кросворд • Нов вокабулар
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Дигитален кросворд дизајниран да внесе свежи и неочекувани зборови
            во секојдневното решавање. Идеален за љубители на крстозбори кои
            сакаат да учат – јазично, културно и стилски.
          </p>

          <div className="mt-6 flex gap-3">
            <Button onClick={() => console.log("Play button clicked")}>
              Пробај сега
            </Button>
            <Button
              variant="outline"
              onClick={() => console.log("View vocabulary clicked")}
            >
              Преглед на вокабулар
            </Button>
          </div>
        </div>

        <Card className="bg-gradient-to-br from-white/50 to-muted/40 p-6">
          <CardHeader>
            <CardTitle>Зошто е посебно?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <Feature
                icon={<Sparkles />}
                title="Селекција на нови зборови"
                desc="Уште од печатот — зборови кои ретко се среќаваат во стандардни крстозбори, внимателно избрани за учење."
              />

              <Feature
                icon={<BookOpen />}
                title="Објаснувања и примери"
                desc="По решавањето на зборовите ќе добиете кратки дефиниции и реченици со пример за лесно запамтување."
              />

              <Feature
                icon={<ShieldCheck />}
                title="Приватност и офлајн игра"
                desc="Опција да симнете пакети на кросворди и да играте без интернет — вашите резултати оставаат само кај вас."
              />
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Како функционира</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-2">
              <li>
                Изберете тежина и тема (општо, класика, наука, локални зборови и
                сл.).
              </li>
              <li>
                Решете го кросвордот со интерактивна мрежа и помошни знаци.
              </li>
              <li>
                По завршување, видете дефиниции, примери и додадете зборови во
                вашата "водич за учење".
              </li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>За креаторите</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Оваа апликација е направена од заљубеници во јазикот и технолошки
              ентузијасти. Целта ни е да ги направиме крстозборите
              поинтерактивни, пообразовни и повесели.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Контакт</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Mail />
                <a
                  href="mailto:hello@krosvord.app"
                  className="text-sm hover:underline"
                >
                  hello@krosvord.app
                </a>
              </div>

              <p className="text-sm text-muted-foreground">
                Имате идеја, теми за кросворди или нови зборови? Јавете ни се!
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="mt-12 border-t pt-6 text-sm text-muted-foreground flex flex-col lg:flex-row lg:justify-between gap-4">
        <div>
          © {new Date().getFullYear()} Кросворд — Нов вокабулар. Сите права
          задржани.
        </div>
        <div className="flex gap-4">
          <button
            className="underline"
            onClick={() => console.log("Privacy policy clicked")}
          >
            Политика за приватност
          </button>
          <button
            className="underline"
            onClick={() => console.log("Terms of service clicked")}
          >
            Услови на користење
          </button>
        </div>
      </footer>
    </main>
  );
}

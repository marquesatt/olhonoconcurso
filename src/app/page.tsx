"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useMemo, useState } from "react";
import { Check, Clock, LineChart, ShieldCheck } from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Simple "tempo economizado" counter demo
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);
  const timeSaved = useMemo(() => {
    // Fake: each second on page = 5 minutos economizados por antecipação ;)
    const minutes = seconds * 5;
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h}h ${m}m`;
  }, [seconds]);

  return (
    <TooltipProvider delayDuration={150}>
      <header className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-background/75 bg-background/60 border-b">
        <div className="mx-auto max-w-6xl px-4 md:px-6 h-16 flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2 font-semibold">
            <Image src="/logo.svg" alt="OlhoNoConcurso" width={28} height={28} />
            <span className="text-lg">OlhoNoConcurso</span>
          </Link>
          <nav aria-label="Primária" className="hidden md:flex items-center gap-6">
            <a href="#como-funciona" className="opacity-80 hover:opacity-100 transition">Como funciona</a>
            <a href="#beneficios" className="opacity-80 hover:opacity-100 transition">Benefícios</a>
            <a href="#depoimentos" className="opacity-80 hover:opacity-100 transition">Prova social</a>
            <a href="#faq" className="opacity-80 hover:opacity-100 transition">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" className="hidden sm:inline-flex">Entrar</Button>
              </TooltipTrigger>
              <TooltipContent>Em breve</TooltipContent>
            </Tooltip>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="shadow-sm">Experimente grátis</Button>
              </DialogTrigger>
              <DialogContent aria-describedby="trial-desc">
                <DialogHeader>
                  <DialogTitle>Solicitar acesso ao MVP</DialogTitle>
                  <DialogDescription id="trial-desc">
                    Deixe seu email para receber acesso prioritário quando liberarmos o teste.
                  </DialogDescription>
                </DialogHeader>
                <form
                  className="flex flex-col gap-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Obrigado! Em breve entraremos em contato.");
                  }}
                >
                  <label htmlFor="email" className="text-sm">Email</label>
                  <Input id="email" type="email" required placeholder="voce@email.com" />
                  <Button type="submit">Quero testar</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <main id="conteudo" className="font-sans">
        {/* Hero */}
        <section className="relative overflow-hidden hero-surface">
          <div className="grid-overlay" aria-hidden="true" />
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Badge className="mb-4" variant="secondary">Gabarito colaborativo inteligente</Badge>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Antecipe seu resultado com IA — antes do gabarito oficial
              </h1>
              <p className="mt-4 text-lg opacity-85 max-w-prose">
                Diga adeus à incerteza pós-prova. Nossa IA transforma respostas da comunidade em uma classificação estimada confiável, para você decidir o próximo passo com calma e estratégia.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="soft-glow">Descubra seu resultado agora</Button>
                <Button size="lg" variant="outline" className="border-2">Ganhe vantagem competitiva</Button>
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm opacity-80">
                <Clock className="h-4 w-4" />
                Tempo economizado pela comunidade: {mounted ? timeSaved : "…"}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[16/10] rounded-xl border bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20 grid place-items-center soft-glow">
                <div className="text-center p-6">
          <Image src="/hero-illustration.svg" alt="IA analisando respostas de concursos" width={480} height={300} className="mx-auto" priority />
                  <p className="mt-2 text-sm opacity-70">Preview da análise por IA</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problema/Solução */}
        <section className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-20" aria-labelledby="problema-solucao">
          <h2 id="problema-solucao" className="text-2xl md:text-3xl font-semibold">Menos espera. Mais clareza.</h2>
          <p className="mt-3 max-w-3xl opacity-85 leading-relaxed">
            A espera pelo gabarito oficial aumenta o estresse e atrasa decisões. O OlhoNoConcurso coleta respostas da comunidade e, com IA, estima seu desempenho para que você planeje com confiança ainda no pós-prova.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Redução de ansiedade",
                desc: "Um termômetro imediato do seu desempenho, sem esperar o gabarito.",
              },
              {
                title: "Planejamento eficiente",
                desc: "Decida rápido: seguir estudando, mudar a estratégia ou focar na próxima prova.",
              },
              {
                title: "Diferencial de IA",
                desc: "Modelos que identificam padrões coletivos e deduzem o gabarito provável com precisão.",
              },
            ].map((b) => (
              <Card key={b.title} className="transition hover:-translate-y-0.5 hover:shadow-md">
                <CardHeader>
                  <CardTitle>{b.title}</CardTitle>
                  <CardDescription>{b.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Como Funciona */}
        <section id="como-funciona" className="bg-[var(--color-background)] border-t">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-20">
      <h2 className="text-2xl md:text-3xl font-semibold">Como funciona</h2>
            <div className="mt-8 grid md:grid-cols-4 gap-6">
              {[ 
                {icon: 
                  <Image src="/icons/collect.svg" alt="Coleta" width={28} height={28} />, title: "Coleta colaborativa", desc: "Candidatos inserem respostas logo após a prova."},
                {icon: <LineChart className="h-7 w-7" />, title: "Análise por IA", desc: "IA identifica padrões e deduz o gabarito provável."},
                {icon: <Check className="h-7 w-7" />, title: "Previsão de resultado", desc: "Classificação estimada e posição relativa."},
                {icon: <ShieldCheck className="h-7 w-7" />, title: "Vantagem competitiva", desc: "Informações antecipadas para decidir melhor."},
              ].map((s, i) => (
        <Card key={i} className="h-full soft-glow">
                  <CardHeader>
                    <div className="h-10 w-10 rounded-md bg-neutral-100 dark:bg-neutral-800 grid place-items-center">
                      {s.icon}
                    </div>
                    <CardTitle className="mt-2 text-lg">{s.title}</CardTitle>
                    <CardDescription>{s.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios Principais */}
        <section id="beneficios" className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold">Benefícios principais</h2>
    <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { title: "Redução da ansiedade", desc: "Veja um panorama do seu desempenho rapidamente." },
              { title: "Planejamento", desc: "Defina próximos passos com dados." },
              { title: "Vantagem competitiva", desc: "Aja antes dos concorrentes." },
            ].map((b) => (
              <Card key={b.title} className="group transition hover:-translate-y-0.5 hover:shadow">
                <CardHeader>
      <Badge variant="outline">Valor real</Badge>
                  <CardTitle className="mt-2">{b.title}</CardTitle>
      <CardDescription>{b.desc}</CardDescription>
                </CardHeader>
                <CardContent>
      <p className="text-sm opacity-70">Micro-interações e feedback imediato para uma experiência fluida.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Prova Social */}
        <section id="depoimentos" className="bg-[var(--color-background)] border-y">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-20">
      <h2 className="text-2xl md:text-3xl font-semibold">O que dizem</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
        { name: "Ana", text: "Descobri que estava bem colocada e foquei no próximo edital.", initials: "AN" },
        { name: "Bruno", text: "Acalmou minha ansiedade no dia seguinte da prova.", initials: "BR" },
        { name: "Carla", text: "A estimativa ficou muito próxima do resultado oficial!", initials: "CA" },
              ].map((t) => (
        <Card key={t.name} className="soft-glow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>{t.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">{t.name}</CardTitle>
                        <CardDescription>Concurseira</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="opacity-80">“{t.text}”</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-10 grid sm:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-semibold">95%</p>
                <p className="opacity-70">Precisão média estimada</p>
              </div>
              <div>
                <p className="text-3xl font-semibold">10k+</p>
                <p className="opacity-70">Respostas analisadas</p>
              </div>
              <div>
                <p className="text-3xl font-semibold">120+</p>
                <p className="opacity-70">Concursos avaliados</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
  <section id="faq" className="mx-auto max-w-4xl px-4 md:px-6 py-12 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold">Dúvidas frequentes</h2>
          <Accordion type="single" collapsible className="mt-6">
            <AccordionItem value="item-1">
              <AccordionTrigger>Como a IA estima o gabarito?</AccordionTrigger>
              <AccordionContent>
                Cruzamos respostas coletivas em massa para identificar padrões consistentes, ponderamos por confiabilidade e simulamos cenários para estimar o gabarito provável.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Qual a precisão?</AccordionTrigger>
              <AccordionContent>
                Em nossos testes iniciais, a precisão média ficou acima de 90% para provas objetivas com alta participação.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Meus dados ficam seguros?</AccordionTrigger>
              <AccordionContent>
                Sim. Armazenamos respostas de forma agregada e anônima. Não compartilhamos dados pessoais.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA Final */}
        <section className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-20">
          <Card className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white soft-glow">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl">Pare de sofrer na espera</CardTitle>
              <CardDescription className="text-white/90">
                Experimente grátis e ganhe vantagem competitiva.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" variant="secondary" className="text-black soft-glow">Experimente grátis</Button>
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white/60 hover:bg-white/10">Descubra seu resultado agora</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 md:px-6 h-16 flex items-center justify-between text-sm">
          <p className="opacity-70">© {new Date().getFullYear()} OlhoNoConcurso</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Privacidade</a>
            <a href="#" className="hover:underline">Termos</a>
          </div>
        </div>
      </footer>
    </TooltipProvider>
  );
}

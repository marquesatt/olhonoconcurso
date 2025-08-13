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
import { Check, Clock, LineChart, ShieldCheck, Menu, Inbox } from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  <div className="container-shell h-16 flex items-center justify-between gap-2">
          <Link href="/" aria-current="page" className="flex items-center gap-2 font-semibold">
            <Image src="/logo.svg" alt="OlhoNoConcurso" width={28} height={28} />
            <span className="text-lg">OlhoNoConcurso</span>
          </Link>
          <nav aria-label="Primária" className="hidden lg:flex items-center gap-6">
            <a href="#como-funciona" className="opacity-80 hover:opacity-100 transition">Como funciona</a>
            <a href="#beneficios" className="opacity-80 hover:opacity-100 transition">Vantagens</a>
            <a href="#depoimentos" className="opacity-80 hover:opacity-100 transition">Resultados reais</a>
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
                <Button className="shadow-sm h-9 px-3 text-sm sm:h-10 sm:px-4 sm:text-base">Experimente grátis</Button>
              </DialogTrigger>
              <DialogContent aria-describedby="trial-desc" className="w-[95vw] sm:max-w-[425px]">
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
            {/* Mobile/Tablet menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-56">
                <DropdownMenuItem asChild>
                  <a href="#como-funciona">Como funciona</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#beneficios">Vantagens</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#depoimentos">Resultados reais</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#faq">FAQ</a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <button type="button" className="w-full text-left opacity-80">Entrar (em breve)</button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main id="conteudo" className="font-sans">
        {/* Hero */}
        <section className="relative overflow-hidden hero-surface">
          <div className="grid-overlay" aria-hidden="true" />
          <div className="container-shell py-14 md:py-20 lg:py-24 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div>
              <Badge className="mb-4" variant="secondary">Gabarito Preliminar com Inteligência Artificial</Badge>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Descubra seu resultado antes de todo mundo
              </h1>
              <p className="mt-4 text-lg opacity-80 max-w-prose">
                Nossa inteligência artificial prevê seu desempenho antes de ser divulgado o gabarito, reduz a ansiedade e coloca você à frente da concorrência.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="soft-glow w-full sm:w-auto">Descubra seu resultado agora</Button>
                <Button size="lg" variant="outline" className="border-2 w-full sm:w-auto" asChild>
                  <a href="#como-funciona">Saiba Como Funciona</a>
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm opacity-80">
                <Clock className="h-4 w-4" />
                Tempo economizado pela comunidade: {mounted ? timeSaved : "…"}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[16/10] rounded-xl border bg-brand-surface grid place-items-center soft-glow">
                <div className="text-center p-6">
          <Image src="/hero-illustration.svg" alt="IA analisando respostas de concursos" width={480} height={300} className="mx-auto" priority />
                  <p className="mt-2 text-sm opacity-70">Preview da análise por IA</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problema/Solução */}
  <section className="container-shell section-space" aria-labelledby="problema-solucao">
          <Reveal className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
            <span className="h-1 w-6 rounded bg-primary" />
            Por que isso importa
          </Reveal>
          <Reveal>
            <h2 id="problema-solucao" className="mt-3 text-2xl md:text-3xl font-semibold">Menos espera. Decisões melhores.</h2>
          </Reveal>
          <Reveal>
          <p className="mt-3 max-w-3xl opacity-80 leading-relaxed">
            A incerteza após a prova consome energia e atrasa seu plano. Com o OlhoNoConcurso, você transforma ansiedade em estratégia: estime sua classificação com base em dados reais da comunidade e defina o próximo passo com confiança.
          </p>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Ansiedade sob controle",
                desc: "Um termômetro imediato do seu desempenho — agora você sabe onde está.",
              },
              {
                title: "Planejamento eficiente",
                desc: "Decida rápido: ajustar a estratégia, mudar o foco ou acelerar para a próxima prova.",
              },
              {
                title: "IA que entrega",
                desc: "Modelos que identificam padrões coletivos para deduzir o gabarito provável com alta precisão.",
              },
            ].map((b) => (
              <Reveal key={b.title}>
                <Card className="transition hover:-translate-y-0.5 hover:shadow-md">
                  <CardHeader>
                    <CardTitle>{b.title}</CardTitle>
                    <CardDescription>{b.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Como Funciona */}
        <section id="como-funciona" className="bg-[var(--color-background)] border-t">
          <div className="container-shell section-space">
            <Reveal className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
              <span className="h-1 w-6 rounded bg-accent" />
              Em 4 passos simples
            </Reveal>
            <Reveal>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Como funciona</h2>
            </Reveal>
            <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[ 
                {icon: <Inbox className="h-7 w-7" />, title: "Coleta colaborativa", desc: "Candidatos inserem respostas logo após a prova."},
                {icon: <LineChart className="h-7 w-7" />, title: "Análise por IA", desc: "IA identifica padrões consistentes e deduz o gabarito provável."},
                {icon: <Check className="h-7 w-7" />, title: "Previsão de resultado", desc: "Você recebe a classificação estimada e sua posição relativa."},
                {icon: <ShieldCheck className="h-7 w-7" />, title: "Vantagem competitiva", desc: "Aja com antecedência e ganhe tempo frente aos concorrentes."},
              ].map((s, i) => (
                <Reveal key={i}>
                  <Card className="h-full soft-glow group">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-md bg-neutral-100 dark:bg-neutral-800 grid place-items-center">
                          {s.icon}
                        </div>
                        <span className="text-xs text-muted-foreground">Passo {i + 1}</span>
                      </div>
                      <CardTitle className="mt-2 text-lg">{s.title}</CardTitle>
                      <CardDescription className="group-hover:text-foreground/80 transition-colors">{s.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios Principais */}
  <section id="beneficios" className="container-shell section-space">
          <Reveal className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
            <span className="h-1 w-6 rounded bg-primary" />
            O que você ganha
          </Reveal>
          <Reveal>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Benefícios principais</h2>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Ansiedade sob controle",
                badge: "Tranquilidade",
                desc: "Saiba se foi bem ainda no dia da prova e siga em paz.",
                bullets: ["Previsão em minutos", "Sem esperar gabarito", "Menos incerteza"],
              },
              {
                title: "Planejamento com dados",
                badge: "Estratégia",
                desc: "Decida com base em números: revisar, seguir para outro edital ou acelerar.",
                bullets: ["Estimativa de nota e posição", "Comparação com a turma", "Próximos passos claros"],
              },
              {
                title: "Vantagem competitiva real",
                badge: "Vantagem",
                desc: "Ganhe tempo e priorize melhor que a concorrência.",
                bullets: ["Ação antecipada", "Foco no que mais rende", "Aprendizado rápido pós-prova"],
              },
            ].map((b) => (
              <Reveal key={b.title}>
                <Card className="group transition hover:-translate-y-0.5 hover:shadow">
                  <CardHeader>
                    <Badge variant="outline">{b.badge}</Badge>
                    <CardTitle className="mt-2">{b.title}</CardTitle>
                    <CardDescription>{b.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm opacity-80 list-disc pl-5 space-y-1">
                      {b.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

  {/* Prova Social */}
        <section id="depoimentos" className="bg-[var(--color-background)] border-y">
          <div className="container-shell section-space">
      <Reveal className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
        <span className="h-1 w-6 rounded bg-accent" />
        Resultados reais
      </Reveal>
      <Reveal>
        <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Evidências de quem já usou</h2>
      </Reveal>
            <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
    { name: "Ana", role: "Aprovada TJ-SP", text: "Descobri que fui bem depois de terminar a prova e nem precisei esperar a banca liberar o gabarito preliminar.", initials: "AN" },
    { name: "Bruno", role: "Candidato PC-DF", text: "Assim que terminei a prova, joguei no site. Ele disse que eu tinha acertado 70%. Quando o gabarito oficial saiu, percebi que o site tinha acertado 98% das questões.", initials: "BR" },
    { name: "Carla", role: "TRT 2ª Região", text: "A previsão do site é um absurdo, não sei como isso funciona, mas a IA deve ser muito poderosa.", initials: "CA" },
              ].map((t) => (
        <Reveal key={t.name}>
                  <Card className="soft-glow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>{t.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-base">{t.name}</CardTitle>
                          <CardDescription>{t.role ?? "Concurseiro(a)"}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="opacity-80">“{t.text}”</p>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
            <div className="mt-10 grid sm:grid-cols-3 gap-4 text-center">
              <Reveal>
    <p className="text-3xl font-semibold">95%</p>
    <p className="opacity-70">Precisão média nas estimativas</p>
              </Reveal>
              <Reveal>
                <p className="text-3xl font-semibold">10k+</p>
    <p className="opacity-70">Respostas analisadas</p>
              </Reveal>
              <Reveal>
                <p className="text-3xl font-semibold">120+</p>
    <p className="opacity-70">Concursos avaliados</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQ */}
  <section id="faq" className="mx-auto max-w-4xl container-shell section-space">
          <Reveal className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
            <span className="h-1 w-6 rounded bg-primary" />
            Transparência
          </Reveal>
          <Reveal>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Dúvidas frequentes</h2>
          </Reveal>
          <Accordion type="single" collapsible className="mt-6">
            <AccordionItem value="item-1">
              <AccordionTrigger>Como a IA estima o gabarito?</AccordionTrigger>
              <AccordionContent>
                Cruzamos respostas coletivas para identificar padrões consistentes, ponderamos por confiabilidade e simulamos cenários. O resultado é um gabarito provável que serve como base para sua classificação estimada.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Qual a precisão?</AccordionTrigger>
              <AccordionContent>
                Em nossos testes iniciais, a precisão média ficou acima de 90% em provas objetivas com alta participação. A precisão aumenta conforme mais candidatos contribuem.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Meus dados ficam seguros?</AccordionTrigger>
              <AccordionContent>
                Sim. Armazenamos respostas de forma agregada e anônima, sem dados pessoais. Você controla o que compartilha.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA Final */}
  <section className="container-shell section-space">
          <Reveal>
          <Card className="bg-brand-gradient soft-glow">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl">Pare de sofrer na espera</CardTitle>
              <CardDescription className="text-[color:var(--brand-foreground)]/90">
                Tenha clareza em minutos. Experimente grátis e ganhe vantagem competitiva agora.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" variant="secondary" className="text-foreground soft-glow">Experimente grátis</Button>
                <Button size="lg" variant="outline" className="bg-transparent text-[color:var(--brand-foreground)] border-[color:var(--brand-foreground)]/60 hover:bg-[color:var(--brand-foreground)]/10">Descubra seu resultado agora</Button>
              </div>
            </CardContent>
          </Card>
          </Reveal>
        </section>
      </main>

      <footer className="border-t">
  <div className="container-shell h-16 flex items-center justify-between text-sm">
          <p className="opacity-70">© {new Date().getFullYear()} OlhoNoConcurso</p>
          <div className="flex items-center gap-4">
            <a href="/privacidade" className="hover:underline">Privacidade</a>
            <a href="/termos" className="hover:underline">Termos</a>
          </div>
        </div>
      </footer>
    </TooltipProvider>
  );
}

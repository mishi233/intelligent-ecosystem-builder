import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Layers, Zap, Target, Building, Users, Download, FileText, Cpu, Monitor, ArrowDown } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F19] via-[#101623] to-[#0B0F19]">
      {/* Header/Navigation */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/9567e71e-b0b0-4354-9e1e-811322c8c6ae.png" 
              alt="Better Code Logo" 
              className="h-8 w-auto"
            />
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#servicios" className="text-gray-300 hover:text-[#FF4ECD] transition-colors">Servicios</a>
            <a href="#enfoque" className="text-gray-300 hover:text-[#FF4ECD] transition-colors">Enfoque</a>
            <a href="#sectores" className="text-gray-300 hover:text-[#FF4ECD] transition-colors">Sectores</a>
          </div>
          <Button className="bg-gradient-to-r from-[#0070F3] via-[#9B5DE5] to-[#FF4ECD] hover:from-[#FF4ECD] hover:via-[#9B5DE5] hover:to-[#0070F3] text-white font-semibold shadow-lg shadow-[#9B5DE5]/25 hover:shadow-xl hover:shadow-[#FF4ECD]/30 transition-all duration-300 transform hover:scale-105">
            Agendar llamada
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-[#F5F2E9] mb-8 leading-tight">
            Construimos ecosistemas inteligentes, no solo flujos automatizados.
          </h1>
          <p className="text-xl text-[#EAEAEA] mb-10 max-w-3xl mx-auto leading-relaxed">
            En Better Code unimos IA + software a medida para resolver problemas reales con datos propios, 
            contexto de negocio y capas de integración robustas.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#0070F3] via-[#9B5DE5] to-[#FF4ECD] hover:from-[#FF4ECD] hover:via-[#9B5DE5] hover:to-[#0070F3] text-white font-semibold px-8 py-4 text-lg shadow-lg shadow-[#9B5DE5]/25 hover:shadow-xl hover:shadow-[#FF4ECD]/30 transition-all duration-300 transform hover:scale-105"
          >
            Agendar llamada <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Propuesta de Valor */}
      <section className="bg-gradient-to-r from-[#1A1F2E]/50 to-[#0B0F19]/30 backdrop-blur-sm py-20 shadow-lg border-t border-[#9B5DE5]/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-slide-in">
            <p className="text-xl text-[#F5F2E9] mb-8 font-medium">
              Sabemos que la IA no funciona en el vacío. Automatizar sin datos ni estructura solo genera ruido.
            </p>
            <p className="text-lg text-[#EAEAEA] mb-12">
              Por eso, en lugar de hacer "magia con prompts", diseñamos soluciones sólidas:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group bg-gradient-to-br from-[#1A1F2E] to-[#101623] p-6 rounded-xl hover:shadow-lg hover:shadow-[#0070F3]/10 transition-all duration-300 border border-[#9B5DE5]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0070F3] to-[#9B5DE5] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#0070F3]/20">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-[#F5F2E9] mb-2">Software a la medida</h3>
              </div>
              
              <div className="text-center group bg-gradient-to-br from-[#1A1F2E] to-[#101623] p-6 rounded-xl hover:shadow-lg hover:shadow-[#9B5DE5]/10 transition-all duration-300 border border-[#9B5DE5]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9B5DE5] to-[#FF4ECD] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#9B5DE5]/20">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-[#F5F2E9] mb-2">Modelos de IA aplicados</h3>
              </div>
              
              <div className="text-center group bg-gradient-to-br from-[#1A1F2E] to-[#101623] p-6 rounded-xl hover:shadow-lg hover:shadow-[#0070F3]/10 transition-all duration-300 border border-[#9B5DE5]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0070F3] to-[#9B5DE5] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#0070F3]/20">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-[#F5F2E9] mb-2">Infraestructura interoperable</h3>
              </div>
              
              <div className="text-center group bg-gradient-to-br from-[#1A1F2E] to-[#101623] p-6 rounded-xl hover:shadow-lg hover:shadow-[#FF4ECD]/10 transition-all duration-300 border border-[#9B5DE5]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9B5DE5] to-[#FF4ECD] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#FF4ECD]/20">
                  <Layers className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-[#F5F2E9] mb-2">Ecosistemas conectados</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué hacemos? */}
      <section id="servicios" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#F5F2E9] text-center mb-12">¿Qué hacemos?</h2>
            <p className="text-xl text-center text-[#EAEAEA] mb-12">
              Combinamos inteligencia artificial, desarrollo a medida y automatización inteligente para construir soluciones que:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#1A1F2E] to-[#101623] p-8 rounded-xl shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-[#0070F3]/5 transition-all duration-300 border border-[#9B5DE5]/20">
                <Target className="h-12 w-12 text-[#0070F3] mb-4" />
                <h3 className="text-xl font-semibold text-[#F5F2E9] mb-3">Entienden el lenguaje del negocio</h3>
                <p className="text-[#EAEAEA]">Desarrollamos soluciones que comprenden y se adaptan a la terminología y procesos específicos de tu industria.</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#1A1F2E] to-[#101623] p-8 rounded-xl shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-[#9B5DE5]/5 transition-all duration-300 border border-[#9B5DE5]/20">
                <Layers className="h-12 w-12 text-[#9B5DE5] mb-4" />
                <h3 className="text-xl font-semibold text-[#F5F2E9] mb-3">Se integran con tus sistemas reales</h3>
                <p className="text-[#EAEAEA]">Creamos capas de integración robustas que conectan sin fricciones con tu infraestructura existente.</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#1A1F2E] to-[#101623] p-8 rounded-xl shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-[#FF4ECD]/5 transition-all duration-300 border border-[#9B5DE5]/20">
                <Database className="h-12 w-12 text-[#FF4ECD] mb-4" />
                <h3 className="text-xl font-semibold text-[#F5F2E9] mb-3">Usan datos propietarios, no plantillas genéricas</h3>
                <p className="text-[#EAEAEA]">Aprovechamos tus datos únicos para entrenar modelos específicos que generen valor real para tu organización.</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#1A1F2E] to-[#101623] p-8 rounded-xl shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-[#0070F3]/5 transition-all duration-300 border border-[#9B5DE5]/20">
                <ArrowRight className="h-12 w-12 text-[#0070F3] mb-4" />
                <h3 className="text-xl font-semibold text-[#F5F2E9] mb-3">Escalan contigo, no contra ti</h3>
                <p className="text-[#EAEAEA]">Arquitecturas modulares y flexibles que crecen con tu negocio sin generar complejidad innecesaria.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Enfoque */}
      <section id="enfoque" className="bg-gradient-to-r from-[#1A1F2E]/50 to-[#101623]/30 backdrop-blur-sm py-20 shadow-lg border-t border-[#9B5DE5]/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#F5F2E9] text-center mb-16">Nuestro enfoque</h2>
            
            <div className="space-y-12">
              <div className="flex items-start space-x-6 p-6 rounded-xl hover:bg-gradient-to-r hover:from-[#1A1F2E]/30 hover:to-[#101623]/20 transition-all duration-300 border border-transparent hover:border-[#0070F3]/20">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0070F3] to-[#9B5DE5] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg shadow-[#0070F3]/30">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#F5F2E9] mb-3">Diagnóstico con foco en datos y contexto</h3>
                  <p className="text-[#EAEAEA]">Analizamos profundamente tu ecosistema de datos, procesos existentes y objetivos estratégicos antes de proponer cualquier solución.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 p-6 rounded-xl hover:bg-gradient-to-r hover:from-[#1A1F2E]/30 hover:to-[#101623]/20 transition-all duration-300 border border-transparent hover:border-[#9B5DE5]/20">
                <div className="w-12 h-12 bg-gradient-to-br from-[#9B5DE5] to-[#FF4ECD] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg shadow-[#9B5DE5]/30">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#F5F2E9] mb-3">Arquitectura modular y ágil</h3>
                  <p className="text-[#EAEAEA]">Diseñamos sistemas que pueden evolucionar y adaptarse, con componentes intercambiables y actualizables según cambien tus necesidades.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 p-6 rounded-xl hover:bg-gradient-to-r hover:from-[#1A1F2E]/30 hover:to-[#101623]/20 transition-all duration-300 border border-transparent hover:border-[#FF4ECD]/20">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF4ECD] to-[#0070F3] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg shadow-[#FF4ECD]/30">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#F5F2E9] mb-3">IA integrada en capas, no como parche</h3>
                  <p className="text-[#EAEAEA]">La inteligencia artificial se incorpora desde el diseño arquitectónico, no como una solución superficial añadida posteriormente.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 p-6 rounded-xl hover:bg-gradient-to-r hover:from-[#1A1F2E]/30 hover:to-[#101623]/20 transition-all duration-300 border border-transparent hover:border-[#0070F3]/20">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0070F3] to-[#9B5DE5] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg shadow-[#0070F3]/30">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#F5F2E9] mb-3">Entrenamiento continuo y mejora real</h3>
                  <p className="text-[#EAEAEA]">Implementamos ciclos de aprendizaje que permiten que tu sistema mejore constantemente con cada interacción y nuevo dato.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Technical Architecture */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#F5F2E9] text-center mb-16">Cómo construimos ecosistemas inteligentes</h2>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Layered Architecture Visualization */}
              <div className="relative">
                <div className="space-y-6">
                  {/* Layer 3 - Application */}
                  <div className="bg-gradient-to-r from-[#9B5DE5]/20 to-[#FF4ECD]/20 p-8 rounded-xl border border-[#9B5DE5]/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 shadow-lg shadow-[#9B5DE5]/10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#9B5DE5] to-[#FF4ECD] rounded-lg flex items-center justify-center shadow-lg shadow-[#9B5DE5]/30">
                        <Monitor className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#F5F2E9]">Aplicación Inteligente</h3>
                    </div>
                    <p className="text-[#EAEAEA] text-sm">Interfaces que toman decisiones automatizadas basadas en tu contexto específico</p>
                  </div>

                  {/* Layer 2 - AI Models */}
                  <div className="bg-gradient-to-r from-[#0070F3]/20 to-[#9B5DE5]/20 p-8 rounded-xl border border-[#0070F3]/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 shadow-lg shadow-[#0070F3]/10 ml-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#0070F3] to-[#9B5DE5] rounded-lg flex items-center justify-center shadow-lg shadow-[#0070F3]/30">
                        <Cpu className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#F5F2E9]">Modelos de IA Entrenados</h3>
                    </div>
                    <p className="text-[#EAEAEA] text-sm">Algoritmos especializados que aprenden el lenguaje de tu industria</p>
                  </div>

                  {/* Layer 1 - Custom Software */}
                  <div className="bg-gradient-to-r from-[#FF4ECD]/20 to-[#0070F3]/20 p-8 rounded-xl border border-[#FF4ECD]/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 shadow-lg shadow-[#FF4ECD]/10 ml-16">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#FF4ECD] to-[#0070F3] rounded-lg flex items-center justify-center shadow-lg shadow-[#FF4ECD]/30">
                        <Code className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#F5F2E9]">Software a Medida</h3>
                    </div>
                    <p className="text-[#EAEAEA] text-sm">Arquitectura robusta que conecta con tus sistemas existentes</p>
                  </div>

                  {/* Layer 0 - Business Data */}
                  <div className="bg-gradient-to-r from-[#1A1F2E] to-[#101623] p-8 rounded-xl border border-[#9B5DE5]/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 shadow-lg shadow-black/20 ml-24">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#101623] to-[#1A1F2E] rounded-lg flex items-center justify-center border border-[#0070F3]/30 shadow-lg shadow-[#0070F3]/10">
                        <FileText className="h-6 w-6 text-[#0070F3]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#F5F2E9]">Datos del Negocio</h3>
                    </div>
                    <p className="text-[#EAEAEA] text-sm">Tu información propietaria, procesos únicos y conocimiento especializado</p>
                  </div>
                </div>

                {/* Connection Lines */}
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 h-full w-px">
                  <div className="h-full bg-gradient-to-b from-[#9B5DE5] via-[#0070F3] via-[#FF4ECD] to-[#101623] opacity-30"></div>
                </div>
              </div>

              {/* Process Flow */}
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-[#F5F2E9] mb-6">Flujo de construcción</h3>
                </div>

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-[#1A1F2E]/30 to-[#101623]/20 rounded-xl border border-[#9B5DE5]/30 hover:border-[#0070F3]/30 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#101623] to-[#1A1F2E] rounded-full flex items-center justify-center border border-[#0070F3]/30 flex-shrink-0 shadow-lg shadow-[#0070F3]/10">
                      <Database className="h-6 w-6 text-[#0070F3]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#F5F2E9]">Datos del negocio</h4>
                      <p className="text-sm text-[#EAEAEA]">Analizamos y estructuramos tu información</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowDown className="h-6 w-6 text-[#0070F3]" />
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-[#1A1F2E]/30 to-[#101623]/20 rounded-xl border border-[#9B5DE5]/30 hover:border-[#FF4ECD]/30 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF4ECD] to-[#9B5DE5] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#FF4ECD]/20">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#F5F2E9]">Software a medida</h4>
                      <p className="text-sm text-[#EAEAEA]">Creamos la infraestructura personalizada</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowDown className="h-6 w-6 text-[#9B5DE5]" />
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-[#1A1F2E]/30 to-[#101623]/20 rounded-xl border border-[#9B5DE5]/30 hover:border-[#0070F3]/30 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0070F3] to-[#9B5DE5] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#0070F3]/20">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#F5F2E9]">Modelos de IA entrenados</h4>
                      <p className="text-sm text-[#EAEAEA]">Integramos IA específica para tu contexto</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowDown className="h-6 w-6 text-[#FF4ECD]" />
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-[#9B5DE5]/20 to-[#FF4ECD]/20 rounded-xl border border-[#9B5DE5]/30 hover:border-[#9B5DE5]/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#9B5DE5] to-[#FF4ECD] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#9B5DE5]/30">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#F5F2E9]">Decisiones inteligentes</h4>
                      <p className="text-sm text-[#EAEAEA]">Sistema que evoluciona y mejora continuamente</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectores */}
      <section id="sectores" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#F5F2E9] mb-8">Sectores donde aplicamos IA</h2>
            <div className="bg-gradient-to-br from-[#1A1F2E] to-[#101623] rounded-2xl p-12 shadow-xl shadow-black/20 border border-[#9B5DE5]/30">
              <Building className="h-16 w-16 text-[#0070F3] mx-auto mb-6" />
              <p className="text-lg text-[#EAEAEA] leading-relaxed font-medium">
                Trabajamos en industrias técnicas, con alto volumen de datos y procesos complejos, donde la IA realmente puede hacer la diferencia. 
                Desde salud hasta producción, pasando por logística, servicios y más.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-[#0B0F19] via-[#1A1F2E] to-[#0B0F19] py-20 border-t border-[#9B5DE5]/10">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#F5F2E9] mb-6">¿Tienes un reto donde la IA sola no basta?</h2>
            <p className="text-xl text-[#EAEAEA] mb-10">
              Trabajemos juntos y creemos un ecosistema que entienda tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#0070F3] via-[#9B5DE5] to-[#FF4ECD] hover:from-[#FF4ECD] hover:via-[#9B5DE5] hover:to-[#0070F3] text-white font-semibold px-8 py-4 text-lg shadow-lg shadow-[#9B5DE5]/25 hover:shadow-xl hover:shadow-[#FF4ECD]/30 transition-all duration-300 transform hover:scale-105"
              >
                Agendar llamada <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-[#FF4ECD] text-[#FF4ECD] hover:bg-[#FF4ECD] hover:text-white px-8 py-4 text-lg shadow-lg shadow-[#FF4ECD]/10 hover:shadow-xl hover:shadow-[#FF4ECD]/20 transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                Descargar brochure <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#0A0A0A] to-[#0D1117] py-12 shadow-inner border-t border-[#9B5DE5]/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-2xl font-bold text-[#F5F2E9] mb-6">Better Code</div>
            <div className="border-t border-[#9B5DE5]/30 pt-6">
              <p className="text-sm text-[#EAEAEA] leading-relaxed">
                Better Code no tiene relación directa con proyectos pasados desarrollados por otras marcas o compañías. 
                Toda solución ofrecida parte de tecnología propia, conocimiento abierto y datos proporcionados por el cliente.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;


import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Layers, Zap, Target, Building, Users, Download, FileText, Cpu, Monitor, ArrowDown } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Brand Gradient */}
      <div className="bg-gradient-to-br from-[#1D2BFF] via-[#7F3FF4] to-[#C936F5] min-h-screen">
        {/* Header/Navigation */}
        <header className="container mx-auto px-6 py-8">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
              Better Code
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#servicios" className="text-white/80 hover:text-white transition-colors">Servicios</a>
              <a href="#enfoque" className="text-white/80 hover:text-white transition-colors">Enfoque</a>
              <a href="#sectores" className="text-white/80 hover:text-white transition-colors">Sectores</a>
            </div>
            <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Agendar llamada
            </Button>
          </nav>
        </header>

        {/* Hero Content */}
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Construimos ecosistemas inteligentes, no solo flujos automatizados.
            </h1>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              En Better Code unimos IA + software a medida para resolver problemas reales con datos propios, 
              contexto de negocio y capas de integración robustas.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#1D2BFF] via-[#7F3FF4] to-[#C936F5] hover:from-[#C936F5] hover:via-[#7F3FF4] hover:to-[#1D2BFF] text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0"
            >
              Agendar llamada <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Propuesta de Valor - Still in Hero */}
        <section className="bg-black/20 backdrop-blur-sm py-20 shadow-lg border-t border-white/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center animate-slide-in">
              <p className="text-xl text-white mb-8 font-medium">
                Sabemos que la IA no funciona en el vacío. Automatizar sin datos ni estructura solo genera ruido.
              </p>
              <p className="text-lg text-white/90 mb-12">
                Por eso, en lugar de hacer "magia con prompts", diseñamos soluciones sólidas:
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center group bg-black/30 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg hover:shadow-[#1D2BFF]/20 transition-all duration-300 border border-white/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1D2BFF] to-[#7F3FF4] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#1D2BFF]/30">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Software a la medida</h3>
                </div>
                
                <div className="text-center group bg-black/30 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg hover:shadow-[#7F3FF4]/20 transition-all duration-300 border border-white/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#7F3FF4] to-[#C936F5] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#7F3FF4]/30">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Modelos de IA aplicados</h3>
                </div>
                
                <div className="text-center group bg-black/30 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg hover:shadow-[#1D2BFF]/20 transition-all duration-300 border border-white/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1D2BFF] to-[#7F3FF4] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#1D2BFF]/30">
                    <Database className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Infraestructura interoperable</h3>
                </div>
                
                <div className="text-center group bg-black/30 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg hover:shadow-[#C936F5]/20 transition-all duration-300 border border-white/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#7F3FF4] to-[#C936F5] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#C936F5]/30">
                    <Layers className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Ecosistemas conectados</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* White Background Sections Start Here */}
      <div className="bg-white">
        {/* ¿Qué hacemos? */}
        <section id="servicios" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-[#1C1C1C] text-center mb-12">¿Qué hacemos?</h2>
              <p className="text-xl text-center text-gray-600 mb-12">
                Combinamos inteligencia artificial, desarrollo a medida y automatización inteligente para construir soluciones que:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <Target className="h-12 w-12 text-[#1D2BFF] mb-4" />
                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">Entienden el lenguaje del negocio</h3>
                  <p className="text-gray-600">Desarrollamos soluciones que comprenden y se adaptan a la terminología y procesos específicos de tu industria.</p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <Layers className="h-12 w-12 text-[#7F3FF4] mb-4" />
                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">Se integran con tus sistemas reales</h3>
                  <p className="text-gray-600">Creamos capas de integración robustas que conectan sin fricciones con tu infraestructura existente.</p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <Database className="h-12 w-12 text-[#C936F5] mb-4" />
                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">Usan datos propietarios, no plantillas genéricas</h3>
                  <p className="text-gray-600">Aprovechamos tus datos únicos para entrenar modelos específicos que generen valor real para tu organización.</p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <ArrowRight className="h-12 w-12 text-[#1D2BFF] mb-4" />
                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">Escalan contigo, no contra ti</h3>
                  <p className="text-gray-600">Arquitecturas modulares y flexibles que crecen con tu negocio sin generar complejidad innecesaria.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestro Enfoque */}
        <section id="enfoque" className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-[#1C1C1C] text-center mb-16">Nuestro enfoque</h2>
              
              <div className="space-y-12">
                <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1D2BFF] to-[#7F3FF4] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">Diagnóstico con foco en datos y contexto</h3>
                    <p className="text-gray-600">Analizamos profundamente tu ecosistema de datos, procesos existentes y objetivos estratégicos antes de proponer cualquier solución.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#7F3FF4] to-[#C936F5] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">Arquitectura modular y ágil</h3>
                    <p className="text-gray-600">Diseñamos sistemas que pueden evolucionar y adaptarse, con componentes intercambiables y actualizables según cambien tus necesidades.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C936F5] to-[#1D2BFF] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">IA integrada en capas, no como parche</h3>
                    <p className="text-gray-600">La inteligencia artificial se incorpora desde el diseño arquitectónico, no como una solución superficial añadida posteriormente.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1D2BFF] to-[#7F3FF4] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">Entrenamiento continuo y mejora real</h3>
                    <p className="text-gray-600">Implementamos ciclos de aprendizaje que permiten que tu sistema mejore constantemente con cada interacción y nuevo dato.</p>
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
              <h2 className="text-3xl font-bold text-[#1C1C1C] text-center mb-16">Cómo construimos ecosistemas inteligentes</h2>
              
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Layered Architecture Visualization */}
                <div className="relative">
                  <div className="space-y-6">
                    {/* Layer 3 - Application */}
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#7F3FF4] to-[#C936F5] rounded-lg flex items-center justify-center shadow-lg">
                          <Monitor className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#1C1C1C]">Aplicación Inteligente</h3>
                      </div>
                      <p className="text-gray-600 text-sm">Interfaces que toman decisiones automatizadas basadas en tu contexto específico</p>
                    </div>

                    {/* Layer 2 - AI Models */}
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md ml-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#1D2BFF] to-[#7F3FF4] rounded-lg flex items-center justify-center shadow-lg">
                          <Cpu className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#1C1C1C]">Modelos de IA Entrenados</h3>
                      </div>
                      <p className="text-gray-600 text-sm">Algoritmos especializados que aprenden el lenguaje de tu industria</p>
                    </div>

                    {/* Layer 1 - Custom Software */}
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md ml-16">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#C936F5] to-[#1D2BFF] rounded-lg flex items-center justify-center shadow-lg">
                          <Code className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#1C1C1C]">Software a Medida</h3>
                      </div>
                      <p className="text-gray-600 text-sm">Arquitectura robusta que conecta con tus sistemas existentes</p>
                    </div>

                    {/* Layer 0 - Business Data */}
                    <div className="bg-white p-8 rounded-xl border-2 border-gray-300 transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md ml-24">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 shadow-sm">
                          <FileText className="h-6 w-6 text-[#1D2BFF]" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#1C1C1C]">Datos del Negocio</h3>
                      </div>
                      <p className="text-gray-600 text-sm">Tu información propietaria, procesos únicos y conocimiento especializado</p>
                    </div>
                  </div>

                  {/* Connection Lines */}
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 h-full w-px">
                    <div className="h-full bg-gradient-to-b from-[#7F3FF4] via-[#1D2BFF] via-[#C936F5] to-gray-400 opacity-30"></div>
                  </div>
                </div>

                {/* Process Flow */}
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-[#1C1C1C] mb-6">Flujo de construcción</h3>
                  </div>

                  <div className="space-y-6">
                    {/* Step 1 */}
                    <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center border border-gray-300 flex-shrink-0 shadow-sm">
                        <Database className="h-6 w-6 text-[#1D2BFF]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1C1C1C]">Datos del negocio</h4>
                        <p className="text-sm text-gray-600">Analizamos y estructuramos tu información</p>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <ArrowDown className="h-6 w-6 text-[#1D2BFF]" />
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#C936F5] to-[#7F3FF4] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Code className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1C1C1C]">Software a medida</h4>
                        <p className="text-sm text-gray-600">Creamos la infraestructura personalizada</p>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <ArrowDown className="h-6 w-6 text-[#7F3FF4]" />
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1D2BFF] to-[#7F3FF4] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1C1C1C]">Modelos de IA entrenados</h4>
                        <p className="text-sm text-gray-600">Integramos IA específica para tu contexto</p>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <ArrowDown className="h-6 w-6 text-[#C936F5]" />
                    </div>

                    {/* Step 4 */}
                    <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-[#7F3FF4]/10 to-[#C936F5]/10 rounded-xl border border-[#7F3FF4]/30 hover:border-[#7F3FF4]/50 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#7F3FF4] to-[#C936F5] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1C1C1C]">Decisiones inteligentes</h4>
                        <p className="text-sm text-gray-600">Sistema que evoluciona y mejora continuamente</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sectores */}
        <section id="sectores" className="bg-gray-50 py-20">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-[#1C1C1C] mb-8">Sectores donde aplicamos IA</h2>
              <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-200">
                <Building className="h-16 w-16 text-[#1D2BFF] mx-auto mb-6" />
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  Trabajamos en industrias técnicas, con alto volumen de datos y procesos complejos, donde la IA realmente puede hacer la diferencia. 
                  Desde salud hasta producción, pasando por logística, servicios y más.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-[#1C1C1C] mb-6">¿Tienes un reto donde la IA sola no basta?</h2>
              <p className="text-xl text-gray-600 mb-10">
                Trabajemos juntos y creemos un ecosistema que entienda tu negocio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#1D2BFF] via-[#7F3FF4] to-[#C936F5] hover:from-[#C936F5] hover:via-[#7F3FF4] hover:to-[#1D2BFF] text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0"
                >
                  Agendar llamada <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-[#C936F5] text-[#C936F5] hover:bg-[#C936F5] hover:text-white px-8 py-4 text-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white"
                >
                  Descargar brochure <Download className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#1C1C1C] to-[#2C2C2C] py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-2xl font-bold text-white mb-6">Better Code</div>
            <div className="border-t border-white/30 pt-6">
              <p className="text-sm text-white/90 leading-relaxed">
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

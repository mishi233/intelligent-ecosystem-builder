
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Layers, Zap, Target, Building, Users, Download } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Header/Navigation */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-[#1E2A3A]">
            Better Code
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#servicios" className="text-[#1E2A3A] hover:text-primary transition-colors">Servicios</a>
            <a href="#enfoque" className="text-[#1E2A3A] hover:text-primary transition-colors">Enfoque</a>
            <a href="#sectores" className="text-[#1E2A3A] hover:text-primary transition-colors">Sectores</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Agendar llamada
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1E2A3A] mb-8 leading-tight">
            Construimos ecosistemas inteligentes, no solo flujos automatizados.
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            En Better Code unimos IA + software a medida para resolver problemas reales con datos propios, 
            contexto de negocio y capas de integración robustas.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Agendar llamada <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Propuesta de Valor */}
      <section className="bg-white py-20 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-slide-in">
            <p className="text-xl text-[#1E2A3A] mb-8 font-medium">
              Sabemos que la IA no funciona en el vacío. Automatizar sin datos ni estructura solo genera ruido.
            </p>
            <p className="text-lg text-gray-600 mb-12">
              Por eso, en lugar de hacer "magia con prompts", diseñamos soluciones sólidas:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group bg-[#EAFDFC] p-6 rounded-xl hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-[#1E2A3A] mb-2">Software a la medida</h3>
              </div>
              
              <div className="text-center group bg-[#E5EAFE] p-6 rounded-xl hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Zap className="h-8 w-8 text-[#2C4EFF]" />
                </div>
                <h3 className="font-semibold text-[#1E2A3A] mb-2">Modelos de IA aplicados</h3>
              </div>
              
              <div className="text-center group bg-[#EAFDFC] p-6 rounded-xl hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-[#1E2A3A] mb-2">Infraestructura interoperable</h3>
              </div>
              
              <div className="text-center group bg-[#E5EAFE] p-6 rounded-xl hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Layers className="h-8 w-8 text-[#2C4EFF]" />
                </div>
                <h3 className="font-semibold text-[#1E2A3A] mb-2">Ecosistemas conectados</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué hacemos? */}
      <section id="servicios" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1E2A3A] text-center mb-12">¿Qué hacemos?</h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Combinamos inteligencia artificial, desarrollo a medida y automatización inteligente para construir soluciones que:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-[#1E2A3A] mb-3">Entienden el lenguaje del negocio</h3>
                <p className="text-gray-600">Desarrollamos soluciones que comprenden y se adaptan a la terminología y procesos específicos de tu industria.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <Layers className="h-12 w-12 text-[#2C4EFF] mb-4" />
                <h3 className="text-xl font-semibold text-[#1E2A3A] mb-3">Se integran con tus sistemas reales</h3>
                <p className="text-gray-600">Creamos capas de integración robustas que conectan sin fricciones con tu infraestructura existente.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <Database className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-[#1E2A3A] mb-3">Usan datos propietarios, no plantillas genéricas</h3>
                <p className="text-gray-600">Aprovechamos tus datos únicos para entrenar modelos específicos que generen valor real para tu organización.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <ArrowRight className="h-12 w-12 text-[#2C4EFF] mb-4" />
                <h3 className="text-xl font-semibold text-[#1E2A3A] mb-3">Escalan contigo, no contra ti</h3>
                <p className="text-gray-600">Arquitecturas modulares y flexibles que crecen con tu negocio sin generar complejidad innecesaria.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Enfoque */}
      <section id="enfoque" className="bg-white py-20 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1E2A3A] text-center mb-16">Nuestro enfoque</h2>
            
            <div className="space-y-12">
              <div className="flex items-start space-x-6 p-6 rounded-xl hover:bg-[#EAFDFC] transition-all duration-300">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-md">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1E2A3A] mb-3">Diagnóstico con foco en datos y contexto</h3>
                  <p className="text-gray-600">Analizamos profundamente tu ecosistema de datos, procesos existentes y objetivos estratégicos antes de proponer cualquier solución.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 p-6 rounded-xl hover:bg-[#E5EAFE] transition-all duration-300">
                <div className="w-12 h-12 bg-[#2C4EFF] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-md">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1E2A3A] mb-3">Arquitectura modular y ágil</h3>
                  <p className="text-gray-600">Diseñamos sistemas que pueden evolucionar y adaptarse, con componentes intercambiables y actualizables según cambien tus necesidades.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 p-6 rounded-xl hover:bg-[#EAFDFC] transition-all duration-300">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-md">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1E2A3A] mb-3">IA integrada en capas, no como parche</h3>
                  <p className="text-gray-600">La inteligencia artificial se incorpora desde el diseño arquitectónico, no como una solución superficial añadida posteriormente.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 p-6 rounded-xl hover:bg-[#E5EAFE] transition-all duration-300">
                <div className="w-12 h-12 bg-[#2C4EFF] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-md">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1E2A3A] mb-3">Entrenamiento continuo y mejora real</h3>
                  <p className="text-gray-600">Implementamos ciclos de aprendizaje que permiten que tu sistema mejore constantemente con cada interacción y nuevo dato.</p>
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
            <h2 className="text-4xl font-bold text-[#1E2A3A] mb-8">Sectores donde aplicamos IA</h2>
            <div className="bg-gradient-to-br from-[#EAFDFC] to-[#E5EAFE] rounded-2xl p-12 shadow-md">
              <Building className="h-16 w-16 text-primary mx-auto mb-6" />
              <p className="text-lg text-[#1E2A3A] leading-relaxed font-medium">
                Trabajamos en industrias técnicas, con alto volumen de datos y procesos complejos, donde la IA realmente puede hacer la diferencia. 
                Desde salud hasta producción, pasando por logística, servicios y más.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-[#1E2A3A] py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">¿Tienes un reto donde la IA sola no basta?</h2>
            <p className="text-xl text-gray-300 mb-10">
              Trabajemos juntos y creemos un ecosistema que entienda tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Agendar llamada <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-[#1E2A3A] px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Descargar brochure <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 shadow-inner">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-2xl font-bold text-[#1E2A3A] mb-6">Better Code</div>
            <div className="border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-600 leading-relaxed">
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

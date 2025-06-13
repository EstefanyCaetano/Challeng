import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style-inicial.css'

import Logo from './img/Logo.png'
import ecmo from './img/ecmo.png'
import uti from './img/uti.png'
import siglario from './img/siglario.png'
import noticia1 from './img/noticia1.webp'
import noticia2 from './img/noticia2.webp'
import noticia3 from './img/noticia3.webp'
import noticia4 from './img/noticia4.webp'
import noticia5 from './img/noticia5.webp'
import noticia6 from './img/noticia6.webp'
import noticia7 from './img/noticia7.webp'
import noticia8 from './img/noticia8.webp'
import noticia9 from './img/noticia9.webp'
import noticia10 from './img/noticia10.webp'
import noticia11 from './img/noticia11.webp'
import noticia12 from './img/noticia12.webp'
import noticia13 from './img/noticia13.webp'
import noticia14 from './img/noticia14.webp'

import carrossel1 from './img/carrossel1.webp'
import carrossel2 from './img/carrossel2.webp'
import carrossel4 from './img/carrossel4.webp'
import carrossel5 from './img/carrossel5.webp'
import carrossel6 from './img/carrossel6.webp'
import carrossel8 from './img/carrossel8.webp'
import carrossel9 from './img/carrossel9.webp'
import carrossel10 from './img/carrossel10.webp'
import carrossel11 from './img/carrossel11.webp'
import carrossel12 from './img/carrossel12.webp'
import carrossel13 from './img/carrossel13.webp'
import carrossel14 from './img/carrossel14.webp'
import carrossel15 from './img/carrossel15.webp'
import component from './img/component.png'


function Inicial() {

  return (
    <>
    
    {/* MENU SUPERIOR ---------------------------------------------------*/}
    <div className="container-menu">
      <div className="container fixed-top">
        <div className="menu-flex">
          
          <div className="info-links">
            <a className="nav-link" href="#"><i className="bi bi-telephone-fill"></i> 11 3155-2800 | 11 3235-2800</a>
            <a className="nav-link" href="https://www.hospitalinfantilsabara.org.br/sac/"><i className="bi bi-headset"></i> SAC</a>
            <a className="nav-link" href="https://www.hospitalinfantilsabara.org.br/portal-do-paciente-e-da-familia/solicitacao-de-copia-de-prontuarios/"><i className="bi bi-file-earmark-plus-fill"></i> Cópia de Prontuário do Paciente</a>
            <a className="nav-link" href="https://www.hospitalinfantilsabara.org.br/planos-de-saude/"><i className="bi bi-calendar-plus"></i> Planos de Saúde</a>
          </div>

          <div className="social-links">
            <a className="rede-sociais nav-link" href="https://www.instagram.com/hospitalsabara/"><i className="bi bi-instagram"></i></a>
            <a className="rede-sociais nav-link" href="https://www.facebook.com/HospitalSabara"><i className="bi bi-facebook"></i></a>
            <a className="rede-sociais nav-link" href="https://www.youtube.com/saudedainfancia"><i className="bi bi-youtube"></i></a>
            <a className="rede-sociais nav-link" href="#"><i className="bi bi-linkedin"></i></a>
          </div>

        </div>
      </div>
    </div> 

    {/* MENU PRINCIPAL ---------------------------------------------------*/}
    <nav className='container-menu-sabara sticky-top bg-white'>
      <div class="container-menu-principal text-center">
        <div class="row g-2">

        <div class="menu-principal col">
          <img className='Logo' src={Logo} alt="Logo do Hospital Sabará com formas geometricas nas cores azul, verde e vermelho" />
        </div>

          <div class="menu-principal col">
            <div class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Central de <br />agendamento
            </div>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item " href='https://www.hospitalinfantilsabara.org.br/planos-de-saude/' type="button">Consultas pesenciais</a></li>
                <li><a class="dropdown-item" href='https://www.hospitalinfantilsabara.org.br/teleconsulta-com-especialista/' type="button">Teleconsultas</a></li>
                <li><a class="dropdown-item" href='https://www.hospitalinfantilsabara.org.br/central-de-agendamento/' type="button">Exames laboratoriais</a></li>
                <li><a class="dropdown-item" href='https://www.hospitalinfantilsabara.org.br/central-de-agendamento/' type="button">Exames de imagem</a></li>
              </ul>
          </div>

          <div class="menu-principal col">
            <div class="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resultado de exames
            </div>
          </div>

          <div class="menu-principal col">
            <div class=" " type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Procure um médico
            </div>
          </div>

          <div class="menu-principal col">
            <div class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Nossos <br />Serviços
            </div>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href='https://www.hospitalinfantilsabara.org.br/alta-complexidade/' type="button">Alta complexidade</a></li>
              <li><a class="dropdown-item" href='https://www.hospitalinfantilsabara.org.br/unidades-e-servicos-hospitalares/centro-de-excelencia/' type="button">Ambulantório de Especialidades</a></li>
              <li><a class="dropdown-item" href='https://www.hospitalinfantilsabara.org.br/unidades-e-servicos-hospitalares/centro-diagnostico/' type="button">Apoio diagnóstico </a></li>
              <li><a class="dropdown-item" href='https://www.hospitalinfantilsabara.org.br/unidades-e-servicos-hospitalares/centro-cirurgico/' type="button">Central Cirúrgico</a></li>
              <li><a class="dropdown-item" href='https://www.hospitalinfantilsabara.org.br/unidades-e-servicos-hospitalares/hospital-dia/' type="button">Hospital Dia </a></li>
              <li><a class="dropdown-item" href='https://www.hospitalinfantilsabara.org.br/unidades-e-servicos-hospitalares/unidade-de-internacao/' type="button">Internação </a></li>
              <li><a class="dropdown-item" href='https://www.hospitalinfantilsabara.org.br/unidades-e-servicos-hospitalares/pronto-socorro/' type="button">Proto-Socorro </a></li>
              <li><a class="dropdown-item" href='https://www.hospitalinfantilsabara.org.br/unidades-e-servicos-hospitalares/unidade-de-terapia-intensiva/' type="button">Terapia Intensiva</a></li>
            </ul>
          </div>

          <div class="menu-principal col">
            <div class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Canal de Apoio aos Pais <br /><i class="bi bi-whatsapp"></i> <span className='contato'>011 94489-6237</span>
            </div>
          </div>

        <div class="menu-principal col">
          <div class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Institucional
          </div>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href='https://www.hospitalinfantilsabara.org.br/canal-lgpd/' type="button">Canal LGPD </a></li>
            <li><a class="dropdown-item" href='https://www.hospitalinfantilsabara.org.br/unidades-e-servicos-hospitalares/inovacao/' type="button">Escritório de Inovação </a></li>
            <li><a class="dropdown-item" href='https://fundacaojles.org.br/' type="button">Fundação JLES </a></li>
            <li><a class="dropdown-item" href='https://www.hospitalinfantilsabara.org.br/imprensa/' type="button">Imprensa </a></li>
            <li><a class="dropdown-item" href='https://institutopensi.org.br/' type="button">Instituto PENSI </a></li>
            <li><a class="dropdown-item" href='https://www.hospitalinfantilsabara.org.br/programa-de-compliance/' type="button">Programa de Compliance </a></li>
            <li><a class="dropdown-item" href='https://www.hospitalinfantilsabara.org.br/conheca-o-programa-de-voluntariado-do-sabara/' type="button">Programa de Voluntariado </a></li>
            <li><a class="dropdown-item" href='https://www.hospitalinfantilsabara.org.br/quem-somos/' type="button">Quem Somos</a></li>
            <li><a class="dropdown-item" href='https://www.hospitalinfantilsabara.org.br/trabalhe-conosco/' type="button">Trabalhe conosco</a></li>
          </ul>
        </div>

        <div class="menu-principal col">
          <div class="button-pesquisa btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="bi bi-search"></i>
          </div>
          <ul class="dropdown-menu">
            <li><input type="text" /> 
            <button className='pesquisando'>Pesquisar</button>
            </li>
          </ul>
        </div>

        </div>
      </div>

    </nav>


    {/*AGENDAMENTO ---------------------------------------------------*/}

    <div className='conteudo-inicial mt-5'>
        <div class="container-informacoes-agendamento text-center">
          <div class="info-agen row g-2">    

          <div className='informacoes-agendamento col'>
            <img src={component}   style={{width: "45px", height: "45px", objectFit: "cover", borderRadius: "8px", margin: "16px"}}></img>

            <div className=''>    
              <p className='text-agen'>Tempo estimado para atendimento <br/> médico após cadastro</p>
              <spam>SÁBADO 26/04/2025 - 20:05</spam>
            </div>

          </div>

          <div className='informacoes-tempo'>
            <button type="button-informacoes" class="emergencia">
              <div className='button-fila'>00:00 - Fila: 0</div>
              Emergência
              </button>

              <button type="button" class="urgencia">
              <div className='button-fila'>00:00 - Fila: 0</div>
                Urgência
              </button>

              <button type="button" class="preferencial">
                <div className='button-fila'>00:00 - Fila: 0</div>
                Preferencial
                </button>

              <button type="button" class="isolamento">
                <div className='button-fila'>00:00 - Fila: 0</div>
                Isolamento
                </button>

              <button type="button" class="pouca-urgencia">
                <div className='button-fila'>01:38 - Fila: 1</div>
                Pouca Urgência
              </button>
             <p className='text-agendamento'>* Informamos que o tempo de espera pode variar em decorrência da complexidade de atendimento <br /> dos pacientes ou emergências. <a href="">Clique aqui</a> para conferir os dias e horários mais movimentados do hospital.</p> 
        </div>
      </div>

    </div>
  </div>

  <div className='container-espacamento'>

  {/* CORROSSEL ------------------------------------- */}
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">

      <div className="carousel-item active" data-bs-interval="10000">
          <div className="container">
            <div className="row flex-nowrap align-items-center" style={{ minHeight: '400px' }}>
              <div className="img-carrossel col-md-6 p-0">
                <img src={carrossel1} className="img-fluid w-100 h-100 object-fit-cover" alt="Imagem do Carrossel" style={{ objectFit: 'cover' }}/>
              </div>
              <div className="noticia-carrossel col-md-6 p-4">
                <div className="conteudo-carrosel">
                  <h2 className="titulo-carrossel">3º Sabará Pediatric Innovation Day</h2>
                  <p className="conteudo-carrossel">Acesse o Edital aqui e inscreva-se!</p>
                  <button className="button-carrossel">SAIBA MAIS</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="10000">
          <div className="container">
            <div className="row flex-nowrap  align-items-center" style={{ minHeight: '400px' }}>
              <div className="img-carrossel col-md-6 p-0">
                <img src={carrossel2} className="img-fluid w-100 h-100 object-fit-cover" alt="Imagem do Carrossel" style={{ objectFit: 'cover' }}/>
              </div>
              <div className="noticia-carrossel col-md-6 p-4">
                <div className="conteudo-carrosel">
                  <h2 className="titulo-carrossel">"Cerimônia do Sino" - Episódio 4</h2>
                  <p className="conteudo-carrossel">No último episódio da série, Márcia Angelis, mãe da paciente Maria Fernanda, fala sobre a importância da equipe de Child Life durante o tratamento de sua filha.</p>
                  <button className="button-carrossel">SAIBA MAIS</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="10000">
          <div className="container">
            <div className="row flex-nowrap  align-items-center" style={{ minHeight: '400px' }}>
              <div className="img-carrossel col-md-6 p-0">
                  <img src={noticia6} className="img-fluid w-100 h-100 object-fit-cover" alt="Imagem do Carrossel" style={{ objectFit: 'cover' }}/>
                </div>
                <div className="noticia-carrossel col-md-6 p-4">
                  <div className="conteudo-carrosel">
                    <h2 className="titulo-carrossel">Entenda a Síndrome de Down com a Dra. Renata Zampol</h2>
                    <p className="conteudo-carrossel">No Blog de Saúde da Veja, a Dra. Renata Mazzotti Zampol, gerente médica da Unidade de Internação do Sabará, fala sobre a importância do acolhimento, os cuidados e os avanços no entendimento da síndrome de Down.</p>
                    <button className="button-carrossel">SAIBA MAIS</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        <div className="carousel-item" data-bs-interval="10000">
          <div className="container">
            <div className="row flex-nowrap  align-items-center" style={{ minHeight: '400px' }}>
              <div className="img-carrossel col-md-6 p-0">
                <img src={carrossel4} className="img-fluid w-100 h-100 object-fit-cover" alt="Imagem do Carrossel" style={{ objectFit: 'cover' }}/>
              </div>
              <div className="noticia-carrossel col-md-6 p-4">
                <div className="conteudo-carrosel">
                  <h2 className="titulo-carrossel">Manual da Disfagia</h2>
                  <p className="conteudo-carrossel">Conheça um pouco mais sobre a Disfagia e faça o download do manual elaborado por nossa equipe de Fonoaudiologia.</p>
                  <button className="button-carrossel">SAIBA MAIS</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="10000">
          <div className="container">
            <div className="row flex-nowrap  align-items-center" style={{ minHeight: '400px' }}>              <div className="img-carrossel col-md-6 p-0">
                <img src={carrossel5} className="img-fluid w-100 h-100 object-fit-cover" alt="Imagem do Carrossel" style={{ objectFit: 'cover' }}/>
              </div>
              <div className="noticia-carrossel col-md-6 p-4">
                <div className="conteudo-carrosel">
                  <h2 className="titulo-carrossel">“Infância sem telas” – Episódio 6</h2>
                  <p className="conteudo-carrossel">Neste episódio, Dr. Carlos Takeuchi, neurologista do Sabará, alerta que diversos estudos ao redor do mundo indicam atrasos cognitivos e distúrbios de aprendizagem associados ao uso excessivo de telas, principalmente entre as crianças na primeira infância.</p>
                  <button className="button-carrossel">SAIBA MAIS</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        <div className="carousel-item" data-bs-interval="10000">
          <div className="container">
            <div className="row flex-nowrap  align-items-center" style={{ minHeight: '400px' }}>             <div className="img-carrossel col-md-6 p-0">
                <img src={carrossel6} className="img-fluid w-100 h-100 object-fit-cover" alt="Imagem do Carrossel" style={{ objectFit: 'cover' }}/>
              </div>
              <div className="noticia-carrossel col-md-6 p-4">
                <div className="conteudo-carrosel">
                  <h2 className="titulo-carrossel">Novo Serviço: Ambulatório de Prematuridade e Alto Risco</h2>
                  <p className="conteudo-carrossel">Agora, o Centro de Excelência oferece um atendimento especializado para bebês prematuros e suas famílias. Com uma equipe multidisciplinar, proporcionamos cuidado completo e humanizado.</p>
                  <button className="button-carrossel">SAIBA MAIS</button>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="carousel-item" data-bs-interval="10000">
          <div className="container">
            <div className="row flex-nowrap  align-items-center" style={{ minHeight: '400px' }}>
              <div className="img-carrossel col-md-6 p-0">
                <img src={noticia12} className="img-fluid w-100 h-100 object-fit-cover" alt="Imagem do Carrossel" style={{ objectFit: 'cover' }}/>
              </div>
              <div className="noticia-carrossel col-md-6 p-4">
                <div className="conteudo-carrosel">
                  <h2 className="titulo-carrossel">Uso Consciente das Telas: O Exemplo Começa em Casa</h2>
                  <p className="conteudo-carrossel">As crianças estão cada vez mais expostas ao mundo digital. No Blog da Veja Saúde, o Dr. Felipe Lora, CEO do Sabará Hospital Infantil, discute como o nosso exemplo pode incentivar um uso mais responsável das telas.</p>
                  <button className="button-carrossel">SAIBA MAIS</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="10000">
          <div className="container">
            <div className="row flex-nowrap  align-items-center" style={{ minHeight: '400px' }}>
              <div className="img-carrossel col-md-6 p-0">
                <img src={carrossel8} className="img-fluid w-100 h-100 object-fit-cover" alt="Imagem do Carrossel" style={{ objectFit: 'cover' }}/>
              </div>
              <div className="noticia-carrossel col-md-6 p-4">
                <div className="conteudo-carrosel">
                  <h2 className="titulo-carrossel">Conheça o novo restaurante do Sabará, o Encantário</h2>
                  <p className="conteudo-carrossel">Pensando na saúde das crianças, o local conta com um menu adaptado para diferentes restrições alimentares, além de refeições para acompanhantes e familiares.</p>
                  <button className="button-carrossel">SAIBA MAIS</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="10000">
          <div className="container">
            <div className="row flex-nowrap  align-items-center" style={{ minHeight: '400px' }}>
              <div className="img-carrossel col-md-6 p-0">
                <img src={carrossel9} className="img-fluid w-100 h-100 object-fit-cover" alt="Imagem do Carrossel" style={{ objectFit: 'cover' }}/>
              </div>
              <div className="noticia-carrossel  col-md-6 p-4">
                <div className="conteudo-carrosel">
                  <h2 className="titulo-carrossel">Nova Sala de Amamentação</h2>
                  <p className="conteudo-carrossel">Criamos um espaço acolhedor para facilitar os períodos de espera das mães e seus pequenos.</p>
                  <button className="button-carrossel">SAIBA MAIS</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="10000">
          <div className="container">
            <div className="row flex-nowrap  align-items-center" style={{ minHeight: '400px' }}>
              <div className="img-carrossel col-md-6 p-0">
                <img src={carrossel10} className="img-fluid w-100 h-100 object-fit-cover" alt="Imagem do Carrossel" style={{ objectFit: 'cover' }}/>
              </div>
              <div className="noticia-carrossel col-md-6 p-4">
                <div className="conteudo-carrosel">
                  <h2 className="titulo-carrossel">Sabará Digital: Saúde Infantil na Palma da Sua Mão</h2>
                  <p className="conteudo-carrossel">Facilite o cuidado com seu filho! Com o app Sabará Digital, você agenda consultas, acessa documentos médicos e consulta exames com rapidez e segurança. Tudo isso gratuitamente e na palma da sua mão.</p>
                  <button className="button-carrossel">SAIBA MAIS</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
  
        <div className="carousel-item" data-bs-interval="10000">
          <div className="container">
           <div className="row flex-nowrap  align-items-center" style={{ minHeight: '400px' }}>
              <div className="img-carrossel col-md-6 p-0">
                <img src={carrossel11} className="img-fluid w-100 h-100 object-fit-cover" alt="Imagem do Carrossel" style={{ objectFit: 'cover' }}/>
              </div>
              <div className="noticia-carrossel col-md-6 p-4">
                <div className="conteudo-carrosel">
                  <h2 className="titulo-carrossel">Cozinhando com Saramira: Receitas Seguras para as Crianças</h2>
                  <p className="conteudo-carrossel">Descubra dicas e receitas para uma alimentação segura e sem riscos para as crianças. Clique e assista agora!</p>
                  <button className="button-carrossel">SAIBA MAIS</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="10000">
          <div className="container">
            <div className="row flex-nowrap  align-items-center" style={{ minHeight: '400px' }}>
              <div className="img-carrossel col-md-6 p-0">
                <img src={carrossel12} className="img-fluid w-100 h-100 object-fit-cover" alt="Imagem do Carrossel" style={{ objectFit: 'cover' }}/>
              </div>
              <div className="noticia-carrossel col-md-6 p-4">
                <div className="conteudo-carrosel">
                  <h2 className="titulo-carrossel">Lançamos o Núcleo de Apoio à Criança com síndrome de Down</h2>
                  <p className="conteudo-carrossel">Conheça o nosso novo serviço.</p>
                  <button className="button-carrossel">SAIBA MAIS</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="10000">
          <div className="container">
            <div className="row flex-nowrap  align-items-center" style={{ minHeight: '400px' }}>
              <div className="img-carrossel col-md-6 p-0">
                <img src={carrossel13} className="img-fluid w-100 h-100 object-fit-cover" alt="Imagem do Carrossel" style={{ objectFit: 'cover' }}/>
              </div>
              <div className="noticia-carrossel col-md-6 p-4">
                <div className="conteudo-carrosel">
                  <h2 className="titulo-carrossel">Exames Laboratoriais no Centro de Excelência</h2>
                  <p className="conteudo-carrossel">Você sabia que agora oferecemos exames laboratoriais no nosso Centro de Excelência?</p>
                  <button className="button-carrossel">SAIBA MAIS</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="10000">
          <div className="container">
            <div className="row flex-nowrap  align-items-center" style={{ minHeight: '400px' }}>
              <div className="img-carrossel col-md-6 p-0">
                <img src={carrossel14} className="img-fluid w-100 h-100 object-fit-cover" alt="Imagem do Carrossel" style={{ objectFit: 'cover' }}/>
              </div>
              <div className="noticia-carrossel  col-md-6 p-4">
                <div className="conteudo-carrosel">
                  <h2 className="titulo-carrossel">Fiquem atentos com tentativas de golpe telefônico</h2>
                  <p className="conteudo-carrossel">Alertamos sobre tentativas de golpes aplicados na cidade, dos quais clientes do Sabará também estão sendo vítimas.</p>
                  <button className="button-carrossel">SAIBA MAIS</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="10000">
          <div className="container">
            <div className="row flex-nowrap  align-items-center" style={{ minHeight: '400px' }}>
              <div className="img-carrossel col-md-6 p-0">
                <img src={carrossel15} className="img-fluid w-100 h-100 object-fit-cover" alt="Imagem do Carrossel" style={{ objectFit: 'cover' }}/>
              </div>
              <div className="noticia-carrossel col-md-6 p-4">
                <div className="conteudo-carrosel">
                  <h2 className="titulo-carrossel">Série de vídeos "Pediatria de A a Z"</h2>
                  <p className="conteudo-carrossel">Nossos especialistas esclarecem as dúvidas mais comuns sobre saúde das crianças e adolescentes de um jeito simples e fácil de entender.</p>
                  <button className="button-carrossel">SAIBA MAIS</button>
                </div>
              </div>
            </div>
          </div>
        </div>

  </div>

  {/* Navegação do carrosel -----------------------------------------*/}

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


  {/* AREAS ------------------------------------------------------ */}
  <div className='container-areas-principal'>

  <div class="container-areas text-center">
        {/* <button onClick={() => window.location.href =  'https://www.hospitalinfantilsabara.org.br/linhas-de-cuidado/aerodigestivo/'}  type="button" class="areas ">Aerodigestivo</button>
        <button onClick={() => window.location.href =  'https://www.hospitalinfantilsabara.org.br/linhas-de-cuidado/cardiologia/'} type="button" class="areas ">Cardiologia</button>
        <button onClick={() => window.location.href =  'https://www.hospitalinfantilsabara.org.br/linhas-de-cuidado/nefrologia/'} type="button" class="areas ">Nefrologia</button>
        <button onClick={() => window.location.href = 'https://www.hospitalinfantilsabara.org.br/linhas-de-cuidado/neurologia/'} type="button" class="areas ">Neorologia</button>
        <button onClick={() => window.location.href =  'https://www.hospitalinfantilsabara.org.br/linhas-de-cuidado/oncologia/'} type="button" class="areas ">Oncologia</button>
        <button onClick={() => window.location.href =  'https://www.hospitalinfantilsabara.org.br/linhas-de-cuidado/reabilitacao-intestinal/'} type="button" class="areas">Reabilitação Intestinal</button>
        <button onClick={() => window.location.href = 'https://www.hospitalinfantilsabara.org.br/linhas-de-cuidado/terapia-fetal-e-neonatal/'} type="button" class="areas ">Terapia Ferapia e Neonatal</button>
     */}

        <button type="button" class="areas ">Aerodigestivo</button>
        <button type="button" class="areas ">Cardiologia</button>
        <button type="button" class="areas ">Nefrologia</button>
        <button type="button" class="areas ">Neorologia</button>
        <button type="button" class="areas ">Oncologia</button>
        <button type="button" class="areas">Reabilitação Intestinal</button>
        <button type="button" class="areas ">Terapia Ferapia e Neonatal</button>
    
    
    </div>

    {/* ECMO & UTI---------------------------------------------------- */}
    <div className='linha-chamadas'>
      <div className='ecom'>
        <img className='img-ecmo' src={ecmo} alt="" />
        <div className='ecom-conteudo'>
          <h2>ECMO</h2>
          <p>Tratamento para pacientes com falência cardíaca ou respiratória.</p>
          <button className='button-ecmo'><strong>SAIBA MAIS</strong> </button>
          {/* <button onClick={window.location.href = 'https://www.hospitalinfantilsabara.org.br/centro-de-excelencia-e-servicos/centro-de-doencas-do-coracao/o-que-tratamos/ecmo-ecls/'} className='button-ecmo'><strong>SAIBA MAIS</strong> </button> */}
        </div>
      </div>

      <div className='uti'>
        <img className='img-uti' src={uti} alt="" />
        <div className='uti-conteudo'>
          <h2>UTI</h2>
          <p>Cuidado intensivo para crianças com quadros graves.</p>
          {/* <button onClick={window.location.href = 'https://www.hospitalinfantilsabara.org.br/unidades-e-servicos-hospitalares/unidade-de-terapia-intensiva/'} className='button-uti'><strong>SAIBA MAIS</strong> </button> */}
          <button className='button-uti'><strong>SAIBA MAIS</strong> </button>

        </div>
      </div>
    </div>

    {/* SIGLARIO ------------------------------------------------------ */}

    <div className='siglario'>
    <img className='img-saglario' src={siglario} alt="" />

      {/* <img onClick={window.location.href = 'https://www.hospitalinfantilsabara.org.br/wp-content/themes/sabara2020/novo-site/pdfs/siglario-sabara.pdf'}  className='img-saglario' src={siglario} alt="" /> */}
    </div>

  </div>

  
  {/* NOTICIAS ------------------------------------------------------ */}
  <div className='noticias'>
    <div className='utimas-noticias'>
      <div>
        <h2 className='titulo-noticia'>ÚLTIMAS NOTICIAS</h2>
        <p className='texr-not'>Acompanhe as novidades do <strong>Sabará Hospital Infantil</strong></p>
      </div>
      <button className='ver-mais'><strong> VER MAIS NOTICIAS</strong></button>
    </div>

      {/* Parte 1 */}
      <div class="midia text-center">
        <div class="row">

        <div  class="col">
          <img className='img-noticias' src={noticia1} alt="" />
            <p className='desc-noticia'>Matéria no jornal O Globo traz especialista falando sobre os benefícios do exercício para saúde mental dos adolescentes</p>
          </div>

          <div  class="col">
            <img className='img-noticias' src={noticia2} alt="" />
            <p className='desc-noticia'>“Cerimônia do Sino” – Episódio 4, Márcia Angelis (mãe da paciente)</p>
          </div>

            <div  class="col">
              <img className='img-noticias' src={noticia7} alt="" />
                <p className='desc-noticia'>Canabidiol pode melhorar a qualidade de vida de crianças com epilepsia resistente a medicamentos</p>
            </div>

            <div  class="col">
              <img className='img-noticias' src={noticia4} alt="" />
                <p className='desc-noticia'>Matéria no jornal O Globo traz especialista falando sobre os benefícios do exercício para saúde mental dos adolescentes</p>
            </div>

        </div>
      </div>

      {/* parte 2 */}
      <div class="midia text-center">
        <div class="row">

          <div  class="col">
            <img className='img-noticias' src={noticia5} alt="" />
              <p className='desc-noticia'>“Cerimônia do Sino” – Episódio 2, Giovanna Pombani</p>
            </div>

            <div  class="col">
              <img className='img-noticias' src={noticia6} alt="" />
                <p className='desc-noticia'>Dra. Renata Mazzotti Zampol, gerente médica da Unidade de Internação do Sabará Hospital Infantil, fala sobre síndrome de Down no Blog de Saúde da Veja</p>
            </div>

              <div  class="col">
                <img className='img-noticias' src={noticia5} alt="" />
                <p className='desc-noticia'>“Cerimônia do Sino” – Episódio 2, Giovanna Pombani</p>
              </div>

              <div  class="col">
                <img className='img-noticias' src={noticia8} alt="" />
                  <p className='desc-noticia'>Sabará investe em novos equipamentos e amplia Serviço de Cardiologia Pediátrica</p>
              </div>

        </div>
      </div>
      
    <div className='utimas-noticias'>
      <div>
        <h2 className='titulo-noticia'>TESTEMUNHAIS</h2>
        <p>Veja os depoimentos de quem passou pelo nosso hospital</p>
      </div>
      <button className='ver-mais'><strong> VER MAIS</strong></button>
    </div>

    <div class="campo-testemunhais text-center">
      <div class="row">

        <div  class="col">
          <img className='img-noticias' src={noticia3} alt="" />
          <p className='desc-noticia'>“A sala sensorial fez meu filho com TEA se sentir em casa”</p>
        </div>

        <div  class="col">
          <img className='img-noticias' src={noticia9} alt="" />
          <p className='desc-noticia'>Conheça a história do pequeno guerreiro Guilherme que nasceu com Atresia de Esôfago e após a cirurgia voltou para sua cidade com a família</p>
        </div>

        <div  class="col">
          <img className='img-noticias' src={noticia10} alt="" />
          <p className='desc-noticia'>Mês dos Pais – Dedicação e amor de pais que acompanham seus filhos incondicionalmente</p>
        </div>

        <div  class="col">
          <img className='img-noticias' src={noticia11} alt="" />
          <p className='desc-noticia'>Conheça a história de Enrico</p>
        </div>

      </div>
    </div>

    <div className='utimas-noticias'>
      <div>
        <h2 className='titulo-noticia'>NA MÍDIA</h2>
        <p>Veja onde o <strong>Sabará Hospital Infantil</strong> foi notícia</p>
      </div>
      <button className='ver-mais'><strong> VER MAIS</strong></button>
    </div>

    <div class="midia text-center">
      <div class="row">

          <div  class="col">
            <img className='img-noticias' src={noticia1} alt="" />
            <p className='desc-noticia'>Matéria no jornal O Globo traz especialista falando sobre os benefícios do exercício para saúde mental dos adolescentes</p>
          </div>

          <div  class="col">
              <img className='img-noticias' src={noticia6} alt="" />
              <p className='desc-noticia'>Dra. Renata Mazzotti Zampol, gerente médica da Unidade de Internação do Sabará Hospital Infantil, fala sobre síndrome de Down no Blog de Saúde da Veja</p>
            </div>

            <div  class="col">
              <img className='img-noticias' src={noticia12} alt="" />
              <p className='desc-noticia'>Dr. Felipe Lora, CEO do Sabará Hospital Infantil fala sobre como os dispositivos eletrônicos se tornaram um problema entre as crianças</p>
            </div>

            <div  class="col">
              <img className='img-noticias' src={noticia13} alt="" />
              <p className='desc-noticia'>Em entrevista para a CNN Brasil Neuropediatra do Sabará Hospital Infantil fala sobre os cuidados com as crianças após uma queda</p>
            </div>

          </div>
        </div>

        <div className='utimas-noticias'>
        <div>
          <h2 className='titulo-noticia'>VÍDEOS INTERESSANTES</h2>
          <p>Assista aos nossos vídeos</p>
        </div>
      <button className='ver-mais'><strong> VER MAIS</strong></button>
    </div>

    <div class="midia text-center">
      <div class="row">

      <div  class="col">
          <img className='img-noticias' src={noticia2} alt="" />
          <p className='desc-noticia'>“Cerimônia do Sino” – Episódio 4, Márcia Angelis (mãe da paciente)</p>
        </div>

        <div  class="col">
          <img className='img-noticias' src={noticia4} alt="" />
          <p className='desc-noticia'>Matéria no jornal O Globo traz especialista falando sobre os benefícios do exercício para saúde mental dos adolescentes</p>
         </div>

          <div  class="col">
            <img className='img-noticias' src={noticia5} alt="" />
            <p className='desc-noticia'>“Cerimônia do Sino” – Episódio 2, Giovanna Pombani</p>
          </div>

          <div  class="col">
            <img className='img-noticias' src={noticia14} alt="" />
            <p className='desc-noticia'>Infância Sem Telas – Episódio 6</p>
          </div>

        </div>
      </div>
      </div>
  </div>
 
    </>
  )
}


export default Inicial

import { getHtmlJSDOM } from "./src/dependencies/getHtmlJSDOM.js";
import { rfebmUrl } from "./src/fetcher/index.js";
import { resultsParser } from "./src/parsers/resultsParser.js";

// const url = rfebmUrl.COMPETITION_SELECTOR.FEDERATION();
const url = rfebmUrl.CLASIFICATION_RESULTS(1007844);
// const htmlPage = await rfebmFetcher(url);
const htmlPage = `
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">    
    <title>RFEBM - Real Federación Española de Balonmano</title>    
    <link href='css/bootstrap.min.css' rel="stylesheet">
    <link href='css/estilos.css?id=60' rel="stylesheet">
    <link href='css/select2.min.css' rel="stylesheet">
    <link href='css/estilos_playoff.css?id=9' rel='stylesheet'>  
    <link href='//fonts.googleapis.com/css?family=Roboto+Condensed' rel="stylesheet">
    <link rel="shortcut icon" href='images/favicon.ico' />

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="federacion,real, española, balonmano, españa, rfebm, deporte, handball, competiciones, resultados, gol, goles, asobal, division de honor, spanish" />
    <meta name="description" content="Resultados y Actas de las Competiciones de la Real Federación Española de Balonmano" />
    <meta name="generator" content="Toools Development" />

    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

  </head><body>
    <div class='container-fluid noprint' id='cabecera'>

        <input type='hidden' value='0' name='seleccion' id='seleccion' />

        <div class='row' style='background:  #044396 ; height: 70px; padding:0px; text-align:center;'>
            <a target="_parent" href='//www.rfebm.com'><img src='/competiciones/images/logo.png' style='float: left;height: 40px;margin-top: 15px;margin-left: 5px;'></a>
            <a target="_parent" href='//www.rfebm.com'><img src='/competiciones/images/titulo.png' style='margin-top: 14px;max-width: calc( 100% - 85px );'></a>
            <!--<a target="_parent" href='https://www.rfebm.com/competiciones/pabellones.php?id_territorial='><button type="button" class="btn btn-primary" style="float: right;height: 40px;margin-top: 15px;margin-left: -147px;;background: #358cff; border-radius: 0; border: 0px; margin-right: 10px; font-family: 'Roboto Condensed'; font-weight: 700; padding-top: 10px;
">Agenda Partidos</button></a>-->
        </div>


        <!-- PRIMERA FILA -->
        <div class='row div_primera_fila_competicion' >
            <div class='div_casa_competicion' style='background:  #044396 ;'><a href='//www.rfebm.com'><span class="glyphicon glyphicon-home icono_casa" aria-hidden="true"></span></a></div>
            <!--<div class='div_titulo_competicion'>COMPETICIONES</div>-->

            <div class='div_select_territorial' style='float:left;'>
                <select id='territorial'>
                    <option value='33'>FED. DE LA C. VALENCIANA</option><option value='36'>FED. TERRIT. DE CASTILLA Y LEON</option><option value='35'>FED. TERRITORIAL CANTABRA</option><option value='37'>FED. TERRITORIAL DE CANARIAS</option><option value='31'>FED. TERRITORIAL NAVARRA</option><option value='32'>FED. TERRITORIAL RIOJANA</option><option value='17'>FEDERACION CATALANA</option><option value='24'>FEDERACION DE CEUTA</option><option value='22'>FEDERACION DE LA R. DE MURCIA</option><option value='19'>FEDERACION EXTREMEÑA</option><option value='20'>FEDERACION GALEGA de BALONMAN</option><option value='25'>FEDERACION MELILLENSE</option><option value='28'>FEDERACION TERR. PRINCIPADO DE ASTURIAS</option><option value='26'>FEDERACION TERRITORIAL ANDALUZA</option><option value='29'>FEDERACION TERRITORIAL BALEAR</option><option value='27'>FEDERACION TERRITORIAL DE ARAGON</option><option value='21'>FEDERACION TERRITORIAL MADRILEÑA</option><option value='18'>FEDERACION VASCA</option><option value='9999'selected>REAL FEDERACION ESPAÑOLA </option>                </select>

            </div>

            <div class='div_select_provincial' style='float:left; display:none;'>
                <select id='provincial'>
                    <option value='0' selected>MOSTRAR TODO</option><option value='1'selected>REAL FEDERACION ESPAÑOLA DE BALONMANO</option>                </select>

            </div>

            <div class='div_select_temporada' style='float:left;'>

                <select id='temporadas'>
                    <option value='2223'>TEMPORADA 2022/2023</option><option value='2122'selected>TEMPORADA 2021/2022</option><option value='2021'>TEMPORADA 2020/2021</option><option value='1920'>TEMPORADA 2019/2020</option><option value='1819'>TEMPORADA 2018/2019</option><option value='1718'>TEMPORADA 2017/2018</option><option value='1617'>TEMPORADA 2016/2017</option>                </select>

            </div>

            <div class='div_select_categoria' style='float:left;'>
                <input type='hidden' id='id_temporada_actual' value='2122'><input type='hidden' id='id_territorial' value='9999'><input type='hidden' id='id_ambito' value='1'><select id='categorias'><option value='200006'>INFANTIL MASC.</option><option value='200007'>INFANTIL FEM.</option><option value='200008'>CADETE FEM.</option><option value='200009'>CADETE MASC.</option><option value='200010'>JUVENIL MASC.</option><option value='200011'>JUVENIL FEM.</option><option value='200012'>DIVISION DE HONOR FEM. FEM.</option><option value='200013'>DIVISION DE HONOR MASC.</option><option value='200014'>DIVISION DE HONOR PLATA MASC.</option><option value='200015'>DIVISION DE HONOR PLATA FEM. FEM.</option><option value='200016'>PRIMERA NACIONAL FEMENINA FEM.</option><option value='200017' selected >PRIMERA NACIONAL MASC.</option><option value='200018'>SEGUNDA NACIONAL  MASC.</option></select>            </div>

            <div class='div_select_competicion'>

                <select id='competiciones'><option value='202364' selected >PRIMERA DIVISION ESTATAL MASCULINA</option></select>            </div>

            <div class='div_select_fase_grupo'>

                <select id='torneos'><option value='1007843'>PRIMERA FASE - GRUPO A</option><option value='1007844' selected >PRIMERA FASE - GRUPO B</option><option value='1007845'>PRIMERA FASE - GRUPO C</option><option value='1007846'>PRIMERA FASE - GRUPO D</option><option value='1007847'>PRIMERA FASE - GRUPO E</option><option value='1007848'>PRIMERA FASE - GRUPO F</option><option value='1011809'>2ª FASE O FASE FINAL - GRUPO I</option><option value='1011810'>2ª FASE O FASE FINAL - GRUPO I I</option><option value='1011811'>2ª FASE O FASE FINAL - GRUPO I I I</option></select>            </div>

        </div>
        <div class='hidden-lg hidden-md'>            <div class='centrado m-t-20 m-b-20 noprint'>
                <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <!-- RFEBM - Competiciones - Desarrollo Partido -->
                <ins class="adsbygoogle"
                     style="display:block"
                     data-ad-client="ca-pub-5199161204691381"
                     data-ad-slot="8245097750"
                     data-ad-format="auto"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>
        </div>
        <!-- SEGUNDA FILA -->
        <div class='row div_segunda_fila_competicion centrado'>
            <div class='div_escudos_cabecera'><a href='equipo.php?seleccion=0&id_equipo=204021&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/100625/square_776b7366746972676567.jpg' alt='LAFUENTE PEREDA' title='LAFUENTE PEREDA'/></a></div><div class='div_escudos_cabecera'><a href='equipo.php?seleccion=0&id_equipo=209246&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/488/square_32383967706436617972.jpg' alt='FINETWORK GIJON' title='FINETWORK GIJON'/></a></div><div class='div_escudos_cabecera'><a href='equipo.php?seleccion=0&id_equipo=201301&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/70/square_646e366b316534346e76.jpg' alt='GRUPO IMQ' title='GRUPO IMQ'/></a></div><div class='div_escudos_cabecera'><a href='equipo.php?seleccion=0&id_equipo=209350&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/443/square_367937356a376b6d6f68.jpg' alt='LECHE MESENOR BALONMANO NAVA' title='LECHE MESENOR BALONMANO NAVA'/></a></div><div class='div_escudos_cabecera'><a href='equipo.php?seleccion=0&id_equipo=203934&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/767/square_64727237756f70706669.jpg' alt='C.B. SANTOÃ±A' title='C.B. SANTOñA'/></a></div><div class='div_escudos_cabecera'><a href='equipo.php?seleccion=0&id_equipo=209500&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/2898/square_35723432687275366a39.jpg' alt='AUTO-CENTER PRINCIPADO VETUSTA' title='AUTO-CENTER PRINCIPADO VETUSTA'/></a></div><div class='div_escudos_cabecera'><a href='equipo.php?seleccion=0&id_equipo=201273&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/126/square_66646434693670306161.jpg' alt='UNIVERSIDAD DE LEÃ³N ADEMAR' title='UNIVERSIDAD DE LEóN ADEMAR'/></a></div><div class='div_escudos_cabecera'><a href='equipo.php?seleccion=0&id_equipo=209180&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/135/square_366a6b36366f3834316a.jpg' alt='CONGESA XXI BALONMANO CIUDAD DE SALAMANCA' title='CONGESA XXI BALONMANO CIUDAD DE SALAMANCA'/></a></div><div class='div_escudos_cabecera'><a href='equipo.php?seleccion=0&id_equipo=209685&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/115/square_633062667072386c3368.jpg' alt='CAMARGO TURISMO' title='CAMARGO TURISMO'/></a></div><div class='div_escudos_cabecera'><a href='equipo.php?seleccion=0&id_equipo=201310&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/784/square_696a716d753673793535.jpg' alt='CDBM DELICIAS' title='CDBM DELICIAS'/></a></div><div class='div_escudos_cabecera'><a href='equipo.php?seleccion=0&id_equipo=201426&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/439/square_7868636d337739673532.jpg' alt='UNIÓN FINANCIERA' title='UNIÓN FINANCIERA'/></a></div><div class='div_escudos_cabecera'><a href='equipo.php?seleccion=0&id_equipo=206995&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/100552/square_68707638733039386339.jpg' alt='OCA HOTELS - VILLA DE LUANCO' title='OCA HOTELS - VILLA DE LUANCO'/></a></div><div class='div_escudos_cabecera'><a href='equipo.php?seleccion=0&id_equipo=201150&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/69/square_6d6b7235397562793961.jpg' alt='CAFES TOSCAF - ATLETICA' title='CAFES TOSCAF - ATLETICA'/></a></div><div class='div_escudos_cabecera'><a href='equipo.php?seleccion=0&id_equipo=209286&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/2896/square_6675636c6a6d30346366.jpg' alt='EZEQUIEL 4VALLES LA ROBLA' title='EZEQUIEL 4VALLES LA ROBLA'/></a></div><div class='div_escudos_cabecera'><a href='equipo.php?seleccion=0&id_equipo=204132&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/100051/square_6e337062396a6f723674.jpg' alt='PIZZERIA LA NONNA- TALLERES FRAN- CD BALOPAL' title='PIZZERIA LA NONNA- TALLERES FRAN- CD BALOPAL'/></a></div>        </div>

        <!-- TERCERA FILA -->
                    <div class='row div_tercera_fila_competicion'>
                <div class='div_enlace_tercera_fila col-md-2 activo_0'><a  href='competicion.php?seleccion=0&id=1007844&id_ambito=1'>RESULTADOS</a></div>
                <div class=' col-md-2'>
                    <div class="row">
                        <div class='div_enlace_tercera_fila col-md-6 '><a href='clasificacion.php?seleccion=0&id=1007844&id_ambito=1'>CLASIFICACIONES</a></div>
                        <div class="div_enlace_tercera_fila col-md-6 "><a  href='calendario.php?seleccion=0&id=1007844&id_ambito=1'>CALENDARIO</a></div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="row">
                        <div class="div_enlace_tercera_fila col-md-6 "><a  href='pabellones.php?id_territorial=9999'>AGENDA PABELLONES</a></div>
                        <div class="div_enlace_tercera_fila col-md-6 "><a  href='partidos_equipos.php?id_territorial=9999'>AGENDA PARTIDOS</a></div>
                    </div>
                </div>
                <div class="col-md-2"><div class="row">
                        <div class="div_enlace_tercera_fila col-md-6 "><a  href='calendario_partidos.php?id_territorial=9999'>AGENDA CALENDARIO</a></div>
                        <div class='div_enlace_tercera_fila col-md-6 '> <a href='estadisticas.php?seleccion=0&id=1007844&id_ambito=1' >GOLEADORES</a></div>
                    </div>
                </div>
                <div class='div_enlace_tercera_fila col-md-2 '><a href='listado_clubs.php?seleccion=0&id_territorial=9999&id_ambito=1'>
                        DIRECTORIO NACIONAL DE CLUBS                    </a></div>
                <div class='div_enlace_tercera_fila col-md-2 '><a href='listado_arbitros.php?id_territorial=9999&id_ambito=1'>LISTADO DE ÁRBITROS</a></div>
            </div>
            
        <div class='row div_cuarta_fila_competicion' style='background:  #044396 ;'>
                        <span style='color: #ddd; margin-right: 30px;' class='hidden-xs hidden-sm'>
			ESTÁS AQUÍ:<strong> RESULTADOS · PRIMERA DIVISION ESTATAL MASCULINA - PRIMERA FASE - GRUPO B</strong>				
		</span>
            <div class='pull-right' style='margin-right: 20px; margin-top: -6px;'>
                <div class="addthis_inline_share_toolbox_7cgd"></div>
            </div>
        </div>
    </div>

<div class='lista_jornadas noprint'><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=1&id_ambito=1'>1</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=2&id_ambito=1'>2</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=3&id_ambito=1'>3</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=4&id_ambito=1'>4</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=5&id_ambito=1'>5</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=6&id_ambito=1'>6</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=7&id_ambito=1'>7</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=8&id_ambito=1'>8</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=9&id_ambito=1'>9</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=10&id_ambito=1'>10</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=11&id_ambito=1'>11</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=12&id_ambito=1'>12</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=13&id_ambito=1'>13</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=14&id_ambito=1'>14</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=15&id_ambito=1'>15</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=16&id_ambito=1'>16</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=17&id_ambito=1'>17</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=18&id_ambito=1'>18</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=19&id_ambito=1'>19</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=20&id_ambito=1'>20</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=21&id_ambito=1'>21</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=22&id_ambito=1'>22</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=23&id_ambito=1'>23</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=24&id_ambito=1'>24</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=25&id_ambito=1'>25</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=26&id_ambito=1'>26</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=27&id_ambito=1'>27</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=28&id_ambito=1'>28</a></div><div class='capa_jornada btn-default '  style='background: #aaa'; ><a href='competicion.php?seleccion=0&id=1007844&jornada=29&id_ambito=1'>29</a></div><div class='capa_jornada btn-default jornada_actual'><a href='competicion.php?seleccion=0&id=1007844&jornada=30&id_ambito=1'>30</a></div><div class='capa_jornada btn-default'><a href='resultados_completos.php?seleccion=0&id=1007844'>TODAS</a></div><div class='capa_jornada btn-default'><a href='tabla_resultados.php?seleccion=0&id=1007844'>TABLA</a></div></div><div class='limpio'></div><div style='width: 100%; max-height: 500px;'></div><div class='titulos pull-left'><h2>RESULTADOS</h3><h4>PRIMERA DIVISION ESTATAL MASCULINA - PRIMERA FASE - GRUPO B</h4></div><div class='pull-right titulo_jornadas'><h4><div style='text-align: right;'>Jornada 30 ( 15-05-2022 )</div><a style='margin-top: 5px; border-radius: 0; border: 0px; margin-bottom: 10px; padding: 6px 106px;' href='/biblioteca?filtro=11' class='btn btn-success'>Normativa</a><br /><a style='margin-top: 5px; float: right; background: #cc0001;border-radius: 0; border: 0px; margin-bottom: 10px;' href='/biblioteca?filtro=184' class='btn btn-primary'>Comité Apelación</a><a style='margin-top: 5px; float: right; background: #cc0001;border-radius: 0; border: 0px; margin-bottom: 10px; margin-right: 10px;' href='/biblioteca?filtro=183' class='btn btn-primary'>Comité Competición</a></h4></div><div class='limpio'></div>   
  <div class='jairo' style='display:none;'>SELECT bal_partido.fecha_confirmada, id_local, id_visitante, resultado_local, resultado_visitante, date_format(fecha,'%d/%m/%Y') as fecha, date_format(fecha,'%k:%i') as hora, estado, 
 bal_campo.nombre as nombre_campo,  bal_partido.id as id_partido, concat(bal_campo.direccion,', ',bal_campo.codigopostal) as direccion_campo, bal_partido.estado, directo, 
 tiene_documentacion,tv, if(url_streaming_local!='', url_streaming_local,if(url_streaming_visitante!='', url_streaming_visitante,'')) as streaming, longitud, latitud, puntos_final_local, puntos_final_visitante,nombre_local_temp,nombre_visitante_temp
            FROM bal_partido                                  
            LEFT JOIN bal_campo ON bal_campo.id=bal_partido.id_campo                                  
            WHERE bal_partido.id_torneo='1007844' and bal_partido.jornada='30' and ((id_local>0 and id_visitante>0) or (id_visitante=0 and id_local=0))</div><div class='table-responsive'><table class='table table-striped'><thead><tr><th></th><th></th><th>EQUIPOS</th><th class='centrado'>MARCADOR</th><th>FECHA</th><th>LUGAR</th><th class='centrado'>TV</th><th>PREVIO</th><th>STREAMING</th><th>DIRECTO</th><th>DATOS LIVE</th><th>ESTADISTICAS</th><th>ESTADO</th><th>ACTA</th></tr></thead><tbody><tr><td class='celda_peque p-t-15'><a href='equipo.php?seleccion=0&id_equipo=209286&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/2896/square_6675636c6a6d30346366.jpg' class='escudo_tabla'/></a></td><td class='celda_peque p-t-15'><a href='equipo.php?seleccion=0&id_equipo=209685&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/115/square_633062667072386c3368.jpg' class='escudo_tabla'/></a></td><span class='cuchufleta' style='display: none;'><pre></pre></span><td class='p-t-20'><a class='' href='equipo.php?seleccion=0&id_equipo=209286&id=1007844'>EZEQUIEL 4VALLES LA ROBLA</a> - <a class='negrita' href='equipo.php?seleccion=0&id_equipo=209685&id=1007844'>CAMARGO TURISMO</a></td><td class='centrado p-t-20'><span class=''>26 </span>-<span class='negrita'> 30</span></td><td><div class='negrita'>14/05/2022</div><div>19:00</div></td><td class='negrita p-t-20'><a href='https://www.google.com/maps/?q=42.8062467,-5.632049199999983' target='_blank'><span class='glyphicon glyphicon-map-marker' aria-hidden='true'></span> &nbsp;Pabellón Municipal de La Robla </a></td><td class='centrado p-t-20'></td><td class='p-t-20'><a href='#' onclick='mostrarPrevio(1145350)'><span class='label label-primary'>PREVIO</span></a></td><td class='p-t-20'><a href='https://youtu.be/aPmtzlsVZ-4' target='_blank'><span class='label label-success'>STREAMING</span></a></td><td class='negrita p-t-20'><a href='#' onclick='mostrarActa(1145350)'><span class='label label-info'>DIRECTO</span></a></td><td class='negrita p-t-20'><a href='#' onclick='window.open("//balonmano.misquad.es/estadisticas_pdc_pdf.php?id=1145350&token=b3fd26133935fa9437cc4e512ab4cab8&sec=8bbbcd3eaebf094cebb543f342d5a87c");'><span class='label label-info'>DATOS LIVE</span></a></td><td class='negrita p-t-20'> <a href='#' onclick='window.open("//balonmano.misquad.es/estadisticas_pdc.php?id=1145350&id_equipo=209286&token=b3fd26133935fa9437cc4e512ab4cab8&sec=8bbbcd3eaebf094cebb543f342d5a87c");'><span class='label label-info'>LOCAL</span></a><a href='#' onclick='window.open("//balonmano.misquad.es/estadisticas_pdc.php?id=1145350&id_equipo=209685&token=b3fd26133935fa9437cc4e512ab4cab8&sec=8bbbcd3eaebf094cebb543f342d5a87c");'><span class='label label-info' style='margin-left: 5px;'>VISIT.</span></a></td><td class='p-t-20'><span class='label label-success'>FINALIZADO</span></td><td class='negrita p-t-20'><a href='#' onclick='mostrarActaFormal(1145350)'><span class='label label-info'>VER ACTA</span></a></td></tr><tr><td class='celda_peque p-t-15'><a href='equipo.php?seleccion=0&id_equipo=201301&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/70/square_646e366b316534346e76.jpg' class='escudo_tabla'/></a></td><td class='celda_peque p-t-15'><a href='equipo.php?seleccion=0&id_equipo=209500&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/2898/square_35723432687275366a39.jpg' class='escudo_tabla'/></a></td><span class='cuchufleta' style='display: none;'><pre></pre></span><td class='p-t-20'><a class='' href='equipo.php?seleccion=0&id_equipo=201301&id=1007844'>GRUPO IMQ</a> - <a class='negrita' href='equipo.php?seleccion=0&id_equipo=209500&id=1007844'>AUTO-CENTER PRINCIPADO VETUSTA</a></td><td class='centrado p-t-20'><span class=''>21 </span>-<span class='negrita'> 30</span></td><td><div class='negrita'>14/05/2022</div><div>20:00</div></td><td class='negrita p-t-20'><a href='https://www.google.com/maps/?q=43.5337247,-5.637497899999971' target='_blank'><span class='glyphicon glyphicon-map-marker' aria-hidden='true'></span> &nbsp;PABELLON BRAULIO GARCIA </a></td><td class='centrado p-t-20'></td><td class='p-t-20'><a href='#' onclick='mostrarPrevio(1145351)'><span class='label label-primary'>PREVIO</span></a></td><td class='p-t-20'><a href='https://youtu.be/w_icBqnc11E' target='_blank'><span class='label label-success'>STREAMING</span></a></td><td class='negrita p-t-20'><a href='#' onclick='mostrarActa(1145351)'><span class='label label-info'>DIRECTO</span></a></td><td class='negrita p-t-20'><a href='#' onclick='window.open("//balonmano.misquad.es/estadisticas_pdc_pdf.php?id=1145351&token=06ab8d2864d41987709798724151d9c5&sec=8bbbcd3eaebf094cebb543f342d5a87c");'><span class='label label-info'>DATOS LIVE</span></a></td><td class='negrita p-t-20'> <a href='#' onclick='window.open("//balonmano.misquad.es/estadisticas_pdc.php?id=1145351&id_equipo=201301&token=06ab8d2864d41987709798724151d9c5&sec=8bbbcd3eaebf094cebb543f342d5a87c");'><span class='label label-info'>LOCAL</span></a><a href='#' onclick='window.open("//balonmano.misquad.es/estadisticas_pdc.php?id=1145351&id_equipo=209500&token=06ab8d2864d41987709798724151d9c5&sec=8bbbcd3eaebf094cebb543f342d5a87c");'><span class='label label-info' style='margin-left: 5px;'>VISIT.</span></a></td><td class='p-t-20'><span class='label label-success'>FINALIZADO</span></td><td class='negrita p-t-20'><a href='#' onclick='mostrarActaFormal(1145351)'><span class='label label-info'>VER ACTA</span></a></td></tr><tr><td class='celda_peque p-t-15'><a href='equipo.php?seleccion=0&id_equipo=201150&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/69/square_6d6b7235397562793961.jpg' class='escudo_tabla'/></a></td><td class='celda_peque p-t-15'><a href='equipo.php?seleccion=0&id_equipo=201273&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/126/square_66646434693670306161.jpg' class='escudo_tabla'/></a></td><span class='cuchufleta' style='display: none;'><pre></pre></span><td class='p-t-20'><a class='negrita' href='equipo.php?seleccion=0&id_equipo=201150&id=1007844'>CAFES TOSCAF - ATLETICA</a> - <a class='' href='equipo.php?seleccion=0&id_equipo=201273&id=1007844'>UNIVERSIDAD DE LEóN ADEMAR</a></td><td class='centrado p-t-20'><span class='negrita'>27 </span>-<span class=''> 26</span></td><td><div class='negrita'>14/05/2022</div><div>19:00</div></td><td class='negrita p-t-20'><a href='https://www.google.com/maps/?q=43.5511933,-5.9251239999999825' target='_blank'><span class='glyphicon glyphicon-map-marker' aria-hidden='true'></span> &nbsp;POLIDEPORTIVO MUNICIPAL LA MAGDALENA </a></td><td class='centrado p-t-20'></td><td class='p-t-20'><a href='#' onclick='mostrarPrevio(1145352)'><span class='label label-primary'>PREVIO</span></a></td><td class='p-t-20'><span class='label label-danger'>NO DISPONIBLE</span></td><td class='negrita p-t-20'><a href='#' onclick='mostrarActa(1145352)'><span class='label label-info'>DIRECTO</span></a></td><td class='negrita p-t-20'><a href='#' onclick='window.open("//balonmano.misquad.es/estadisticas_pdc_pdf.php?id=1145352&token=506d5294a84063aeae8ee0bf5bb4d75c&sec=8bbbcd3eaebf094cebb543f342d5a87c");'><span class='label label-info'>DATOS LIVE</span></a></td><td class='negrita p-t-20'> <a href='#' onclick='window.open("//balonmano.misquad.es/estadisticas_pdc.php?id=1145352&id_equipo=201150&token=506d5294a84063aeae8ee0bf5bb4d75c&sec=8bbbcd3eaebf094cebb543f342d5a87c");'><span class='label label-info'>LOCAL</span></a><a href='#' onclick='window.open("//balonmano.misquad.es/estadisticas_pdc.php?id=1145352&id_equipo=201273&token=506d5294a84063aeae8ee0bf5bb4d75c&sec=8bbbcd3eaebf094cebb543f342d5a87c");'><span class='label label-info' style='margin-left: 5px;'>VISIT.</span></a></td><td class='p-t-20'><span class='label label-success'>FINALIZADO</span></td><td class='negrita p-t-20'><a href='#' onclick='mostrarActaFormal(1145352)'><span class='label label-info'>VER ACTA</span></a></td></tr><tr><td class='celda_peque p-t-15'><a href='equipo.php?seleccion=0&id_equipo=201426&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/439/square_7868636d337739673532.jpg' class='escudo_tabla'/></a></td><td class='celda_peque p-t-15'><a href='equipo.php?seleccion=0&id_equipo=203934&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/767/square_64727237756f70706669.jpg' class='escudo_tabla'/></a></td><span class='cuchufleta' style='display: none;'><pre></pre></span><td class='p-t-20'><a class='negrita' href='equipo.php?seleccion=0&id_equipo=201426&id=1007844'>UNIÓN FINANCIERA</a> - <a class='' href='equipo.php?seleccion=0&id_equipo=203934&id=1007844'>C.B. SANTOñA</a></td><td class='centrado p-t-20'><span class='negrita'>29 </span>-<span class=''> 23</span></td><td><div class='negrita'>14/05/2022</div><div>19:00</div></td><td class='negrita p-t-20'><a href='https://www.google.com/maps/?q=43.3663833,-5.864935699999933' target='_blank'><span class='glyphicon glyphicon-map-marker' aria-hidden='true'></span> &nbsp;Polideportivo de Vallobin </a></td><td class='centrado p-t-20'></td><td class='p-t-20'><a href='#' onclick='mostrarPrevio(1145353)'><span class='label label-primary'>PREVIO</span></a></td><td class='p-t-20'><a href='https://www.youtube.com/watch?v=s8vnxM18u4M' target='_blank'><span class='label label-success'>STREAMING</span></a></td><td class='negrita p-t-20'><a href='#' onclick='mostrarActa(1145353)'><span class='label label-info'>DIRECTO</span></a></td><td class='negrita p-t-20'><a href='#' onclick='window.open("//balonmano.misquad.es/estadisticas_pdc_pdf.php?id=1145353&token=03eba12184607f1ed5a6568cc696ef6a&sec=8bbbcd3eaebf094cebb543f342d5a87c");'><span class='label label-info'>DATOS LIVE</span></a></td><td class='negrita p-t-20'> <a href='#' onclick='window.open("//balonmano.misquad.es/estadisticas_pdc.php?id=1145353&id_equipo=201426&token=03eba12184607f1ed5a6568cc696ef6a&sec=8bbbcd3eaebf094cebb543f342d5a87c");'><span class='label label-info'>LOCAL</span></a><a href='#' onclick='window.open("//balonmano.misquad.es/estadisticas_pdc.php?id=1145353&id_equipo=203934&token=03eba12184607f1ed5a6568cc696ef6a&sec=8bbbcd3eaebf094cebb543f342d5a87c");'><span class='label label-info' style='margin-left: 5px;'>VISIT.</span></a></td><td class='p-t-20'><span class='label label-success'>FINALIZADO</span></td><td class='negrita p-t-20'><a href='#' onclick='mostrarActaFormal(1145353)'><span class='label label-info'>VER ACTA</span></a></td></tr><tr><td class='celda_peque p-t-15'><a href='equipo.php?seleccion=0&id_equipo=209246&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/488/square_32383967706436617972.jpg' class='escudo_tabla'/></a></td><td class='celda_peque p-t-15'><a href='equipo.php?seleccion=0&id_equipo=204132&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/100051/square_6e337062396a6f723674.jpg' class='escudo_tabla'/></a></td><span class='cuchufleta' style='display: none;'><pre></pre></span><td class='p-t-20'><a class='' href='equipo.php?seleccion=0&id_equipo=209246&id=1007844'>FINETWORK GIJON</a> - <a class='negrita' href='equipo.php?seleccion=0&id_equipo=204132&id=1007844'>PIZZERIA LA NONNA- TALLERES FRAN- CD BALOPAL</a></td><td class='centrado p-t-20'><span class=''>27 </span>-<span class='negrita'> 30</span></td><td><div class='negrita'>14/05/2022</div><div>19:00</div></td><td class='negrita p-t-20'><a href='https://www.google.com/maps/?q=43.5390958,-5.6495167' target='_blank'><span class='glyphicon glyphicon-map-marker' aria-hidden='true'></span> &nbsp;PABELLÓN DE LA ARENA </a></td><td class='centrado p-t-20'></td><td class='p-t-20'><a href='#' onclick='mostrarPrevio(1145354)'><span class='label label-primary'>PREVIO</span></a></td><td class='p-t-20'><a href='https://youtu.be/zGVMtxkuNCM' target='_blank'><span class='label label-success'>STREAMING</span></a></td><td class='negrita p-t-20'><a href='#' onclick='mostrarActa(1145354)'><span class='label label-info'>DIRECTO</span></a></td><td class='negrita p-t-20'><a href='#' onclick='window.open("//balonmano.misquad.es/estadisticas_pdc_pdf.php?id=1145354&token=28ee492478b5168b88314b3112cb82ce&sec=8bbbcd3eaebf094cebb543f342d5a87c");'><span class='label label-info'>DATOS LIVE</span></a></td><td class='negrita p-t-20'> <a href='#' onclick='window.open("//balonmano.misquad.es/estadisticas_pdc.php?id=1145354&id_equipo=209246&token=28ee492478b5168b88314b3112cb82ce&sec=8bbbcd3eaebf094cebb543f342d5a87c");'><span class='label label-info'>LOCAL</span></a><a href='#' onclick='window.open("//balonmano.misquad.es/estadisticas_pdc.php?id=1145354&id_equipo=204132&token=28ee492478b5168b88314b3112cb82ce&sec=8bbbcd3eaebf094cebb543f342d5a87c");'><span class='label label-info' style='margin-left: 5px;'>VISIT.</span></a></td><td class='p-t-20'><span class='label label-success'>FINALIZADO</span></td><td class='negrita p-t-20'><a href='#' onclick='mostrarActaFormal(1145354)'><span class='label label-info'>VER ACTA</span></a></td></tr><tr><td class='celda_peque p-t-15'><a href='equipo.php?seleccion=0&id_equipo=206995&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/100552/square_68707638733039386339.jpg' class='escudo_tabla'/></a></td><td class='celda_peque p-t-15'><a href='equipo.php?seleccion=0&id_equipo=209180&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/135/square_366a6b36366f3834316a.jpg' class='escudo_tabla'/></a></td><span class='cuchufleta' style='display: none;'><pre></pre></span><td class='p-t-20'><a class='' href='equipo.php?seleccion=0&id_equipo=206995&id=1007844'>OCA HOTELS - VILLA DE LUANCO</a> - <a class='negrita' href='equipo.php?seleccion=0&id_equipo=209180&id=1007844'>CONGESA XXI BALONMANO CIUDAD DE SALAMANCA</a></td><td class='centrado p-t-20'><span class=''>30 </span>-<span class='negrita'> 37</span></td><td><div class='negrita'>14/05/2022</div><div>19:00</div></td><td class='negrita p-t-20'><a href='https://www.google.com/maps/?q=43.6171349,-5.7945781' target='_blank'><span class='glyphicon glyphicon-map-marker' aria-hidden='true'></span> &nbsp;POLIDEPORTIVO MUNICIPAL JENARO FERNANDEZ DIEGO </a></td><td class='centrado p-t-20'></td><td class='p-t-20'><a href='#' onclick='mostrarPrevio(1145355)'><span class='label label-primary'>PREVIO</span></a></td><td class='p-t-20'><a href='https://youtu.be/QHE4sJsNpDg' target='_blank'><span class='label label-success'>STREAMING</span></a></td><td class='negrita p-t-20'><a href='#' onclick='mostrarActa(1145355)'><span class='label label-info'>DIRECTO</span></a></td><td class='negrita p-t-20'><a href='#' onclick='window.open("//balonmano.misquad.es/estadisticas_pdc_pdf.php?id=1145355&token=d11b1cce99d33c34373287703fac5ffe&sec=8bbbcd3eaebf094cebb543f342d5a87c");'><span class='label label-info'>DATOS LIVE</span></a></td><td class='negrita p-t-20'> <a href='#' onclick='window.open("//balonmano.misquad.es/estadisticas_pdc.php?id=1145355&id_equipo=206995&token=d11b1cce99d33c34373287703fac5ffe&sec=8bbbcd3eaebf094cebb543f342d5a87c");'><span class='label label-info'>LOCAL</span></a><a href='#' onclick='window.open("//balonmano.misquad.es/estadisticas_pdc.php?id=1145355&id_equipo=209180&token=d11b1cce99d33c34373287703fac5ffe&sec=8bbbcd3eaebf094cebb543f342d5a87c");'><span class='label label-info' style='margin-left: 5px;'>VISIT.</span></a></td><td class='p-t-20'><span class='label label-success'>FINALIZADO</span></td><td class='negrita p-t-20'><a href='#' onclick='mostrarActaFormal(1145355)'><span class='label label-info'>VER ACTA</span></a></td></tr><tr><td class='celda_peque p-t-15'><a href='equipo.php?seleccion=0&id_equipo=209350&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/443/square_367937356a376b6d6f68.jpg' class='escudo_tabla'/></a></td><td class='celda_peque p-t-15'><a href='equipo.php?seleccion=0&id_equipo=204021&id=1007844'><img src='http://balonmano.isquad.es/images/afiliacion_clubs/100625/square_776b7366746972676567.jpg' class='escudo_tabla'/></a></td><span class='cuchufleta' style='display: none;'><pre></pre></span><td class='p-t-20'><a class='negrita' href='equipo.php?seleccion=0&id_equipo=209350&id=1007844'>LECHE MESENOR BALONMANO NAVA</a> - <a class='' href='equipo.php?seleccion=0&id_equipo=204021&id=1007844'>LAFUENTE PEREDA</a></td><td class='centrado p-t-20'><span class='negrita'>39 </span>-<span class=''> 32</span></td><td><div class='negrita'>14/05/2022</div><div>20:30</div></td><td class='negrita p-t-20'><a href='https://www.google.com/maps/?q=41.153341,-4.489899000000037' target='_blank'><span class='glyphicon glyphicon-map-marker' aria-hidden='true'></span> &nbsp;P. MPAL. DE NAVA DE LA ASUNCION </a></td><td class='centrado p-t-20'></td><td class='p-t-20'><a href='#' onclick='mostrarPrevio(1145356)'><span class='label label-primary'>PREVIO</span></a></td><td class='p-t-20'><a href='https://youtu.be/Xadb0ABlH_E' target='_blank'><span class='label label-success'>STREAMING</span></a></td><td class='negrita p-t-20'><a href='#' onclick='mostrarActa(1145356)'><span class='label label-info'>DIRECTO</span></a></td><td class='negrita p-t-20'><a href='#' onclick='window.open("//balonmano.misquad.es/estadisticas_pdc_pdf.php?id=1145356&token=4a9c5e235e8fb9a8ecafd1aad90a88cc&sec=8bbbcd3eaebf094cebb543f342d5a87c");'><span class='label label-info'>DATOS LIVE</span></a></td><td class='negrita p-t-20'> <a href='#' onclick='window.open("//balonmano.misquad.es/estadisticas_pdc.php?id=1145356&id_equipo=209350&token=4a9c5e235e8fb9a8ecafd1aad90a88cc&sec=8bbbcd3eaebf094cebb543f342d5a87c");'><span class='label label-info'>LOCAL</span></a><a href='#' onclick='window.open("//balonmano.misquad.es/estadisticas_pdc.php?id=1145356&id_equipo=204021&token=4a9c5e235e8fb9a8ecafd1aad90a88cc&sec=8bbbcd3eaebf094cebb543f342d5a87c");'><span class='label label-info' style='margin-left: 5px;'>VISIT.</span></a></td><td class='p-t-20'><span class='label label-success'>FINALIZADO</span></td><td class='negrita p-t-20'><a href='#' onclick='mostrarActaFormal(1145356)'><span class='label label-info'>VER ACTA</span></a></td></tr></tbody></table></div>

      

      <div class="modalajax modal fade" tabindex='-1' role='dialog' aria-labelledby='basicModal' aria-hidden='true'>

      <div class="modal-dialog modal-lg">

        <div class='modal-content'>

            <div class="modal-header">
              <h4 class="modal-title pull-left" id="myModalLabel">Desarrollo del partido (esta ventana se autorecargará automáticamente)</h4>
              <button type="button" class="close" data-dismiss="modal">×</button>
            </div>

            <div class="modal-body equipo">
                                    
                
            </div>

            <div class="modal-footer">
                <button class="btn btn-danger" data-dismiss="modal">Cerrar</button>
            </div>

        </div>

      </div>

    </div>

    <div class="modalajax_directo modal fade" tabindex='-1' role='dialog' aria-labelledby='basicModal' aria-hidden='true'>

      <div class="modal-dialog modal-lg" style='width: 90%;'>

        <div class='modal-content'>

            <div class="modal-header">
              <h4 class="modal-title pull-left" id="myModalLabel">Directo del partido (Se autoactualiza cada 30 segundos)</h4>
              <button type="button" class="close" data-dismiss="modal">×</button>
            </div>

            <div class="modal-body equipo">                                    
                <iframe src="" style="zoom:0.60" width="99.6%" height="1200" frameborder="0" id='iframedirecto'></iframe>
            </div>

            <div class="modal-footer">
                <button class="btn btn-danger" data-dismiss="modal">Cerrar</button>
            </div>

        </div>

      </div>

    </div>

    <div class="modalajax_acta_formal modal fade" tabindex='-1' role='dialog' aria-labelledby='basicModal' aria-hidden='true'>

      <div class="modal-dialog modal-lg" style='width: 90%;'>

        <div class='modal-content'>

            <div class="modal-header">
              <h4 class="modal-title pull-left" id="myModalLabel">Acta del partido</h4>
              <button type="button" class="close" data-dismiss="modal">×</button>
            </div>

            <div class="modal-body equipo">
                                    
                
            </div>

            <div class="modal-footer">
                <button class="btn btn-danger" data-dismiss="modal">Cerrar</button>
            </div>

        </div>

      </div>

    </div>

    <div class="modalajax_previo modal fade" tabindex='-1' role='dialog' aria-labelledby='basicModal' aria-hidden='true'>

      <div class="modal-dialog">

        <div class='modal-content'>

            <div class="modal-header">
              <h4 class="modal-title pull-left" id="myModalLabel">Información del partido</h4>
              <button type="button" class="close" data-dismiss="modal">×</button>
            </div>

            <div class="modal-body equipo">
                                    
                
            </div>

            <div class="modal-footer">
                <button class="btn btn-danger" data-dismiss="modal">Cerrar</button>
            </div>

        </div>

      </div>

    </div>

    <div class="modalajax_doc modal fade" tabindex='-1' role='dialog' aria-labelledby='basicModal' aria-hidden='true'>

      <div class="modal-dialog">

        <div class='modal-content'>

            <div class="modal-header">
              <h4 class="modal-title pull-left" id="myModalLabel">Documentación del partido</h4>
              <button type="button" class="close" data-dismiss="modal">×</button>
            </div>

            <div class="modal-body equipo">
                                    
                
            </div>

            <div class="modal-footer">
                <button class="btn btn-danger" data-dismiss="modal">Cerrar</button>
            </div>

        </div>

      </div>

    </div>

  </body>
    	<div class='block'><img src='images/logo.png' style='height: 200px; margin-bottom: 20px;'/><div><strong>AVISO:</strong> Su navegador utiliza un bloqueador de publicidad que impide que esta página funcione correctamente, desactivelo para poder continuar.</div></div>
    <script src="js/jquery-1.11.1.min.js"></script>        
    <script src="js/select2.full.min.js"></script>    
    <script src="js/bootstrap.min.js"></script>
    <script src="js/myscript.js?id=79"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js" integrity="sha512-T/tUfKSV1bihCnd+MxKD0Hm1uBBroVYBOYSk1knyvQ9VyZJpc/ALb4P0r6ubwVPSGB2GvjeoMAJJImBG12TiaQ==" crossorigin="anonymous"></script>
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-51659359357a01f4"></script> 
    <script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-83593519-1', 'auto');
	  ga('send', 'pageview');

	</script>
</html>`;
const { document } = getHtmlJSDOM(htmlPage);
resultsParser(document);

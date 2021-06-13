import React, {useEffect} from 'react';
import ButtonGreen from  '../../components/ButtonGreen/ButtonGreen';
import headerSvg from '../../../assets/imgs/rentACar.png';
import { Accordion,  AccordionSummary, AccordionDetails, Typography, makeStyles } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { openNavbar, openFooter } from '../../../store/actions/viewActions';

const useStyles = makeStyles({
  heading: {
    fontSize: '1.1rem',
  }
})

const AboutUs = (props) => {

  useEffect(() => {
    props.openNavbar();
    props.openFooter();
  }, [])

  const classes = useStyles();

  return (
    <div className='top-offset AboutUs'>
      <header className='AboutUsHeader  box-shadow'>
        <div className='AboutUsHeaderText' >
          <h1 className='text-green'>Rent a Car</h1>
          <p>Günümüzde birçok işletme araç satış ve kiralama hizmetlerinde yaptıkları
satış, randevu ve hizmetleri düzenli veriler şeklinde tutmakta zorlanmaktadırlar.
Sadece bununla kalmayıp bayi-bayi büyüyen bir firmada bu işlemler oldukça zor
yapılmaktadır. Bu tarz firmalar öncelikle sağlam bir yazılım altyapısı oluşturarak
şirketini güvendiği yazılıma teslim etmektedirler. Oldukça zahmetli ve içerikli bir
yapıda olsa firmanın olmazsa olmazı haline gelmiştir. Bizim buradaki amacımız bu
tarz firmalara değinerek ihtiyaçlarını basit yollarla karşılayabilmektir.</p>          
        <ButtonGreen
            text='Araçlara Git'
            component={Link}
            to='/vehicles'
          />
        </div>
        <img src={headerSvg} alt='city driver illustration' style={{maxWidth: '500px'}} />
      </header>

      <div className='AboutUsAccordionHeading' >
        <h3>Biz Kimiz</h3>
      </div>
      <div className='AboutUsAccordion'>
        <h4>Öğrenciler</h4>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading} >Mehmet Nuri Hanedar</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>02.06.1999 da İstanbul’da doğdu. İlk ve orta okulu Yavuz
Selim ilk ve orta okulunda okudu. Liseyi Sultanahmet Anadolu Teknik Lisesinde
Bilgisayar Programcılığı bölümünde web tasarım ve programlama alanında okuyarak
2017 yılında tamamladı. Aynı yıl Sakarya Üniversitesi Bilgisayar Mühendisliği
bölümünü kazandı. 2019 yazında Vis Teknoloji ve Bilişim Hizmetlerinde yazılım
stajını tamamladı. 2020 yazında donanım stajını Uitsec International Bilgi
Teknolojilerinde yapmıştır. 2021 yılının başlarında Xtanbul software firmasında fullstack developer olarak iş hayatına atılmıştır. Sakarya Üniversitesi Bilgisayar
Mühendisliği bölümünden 2021 yılında mezun olması beklenmektedir.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading} >Burak Bayram</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>31.05.1999 da İstanbul’un Bakırköy ilçesinde doğdu. İlköğretim
eğitimini 75. Yıl İlköğretim Okulunda aldı. Lise eğitimini Gaziosmanpaşa Anadolu
Lisesinde tamamlayarak 2017 yılında mezun oldu. 2017 yılında Sakarya Üniversitesi
Bilgisayar Mühendisliği Bölümü’nü kazandı. 2019 yılında PlusClouds: Cloud
Computing bulut teknolojileri hizmeti veren şirkette stajını yapmıştır. Sakarya
Üniversitesi Bilgisayar Mühendisliği bölümünden 2021 yılında mezun olması
beklenmektedir</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading} >Kaan Gecü</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>13.02.1998’da İstanbul’da doğdu. İlk, orta ve lise öğrenimini İstanbul’da
tamamladı. 2017 yılında Sakarya Üniversitesi Bilgisayar Mühendisliği bölümünü
kazandı. 2020 yılında Erasmus programı ile Fontys Hogescholen’da eğitim gördü.
2020 yılının Eylül ayında Data is Power şirketinde yazılım stajını tamamladı.
Sakarya Üniversitesi Bilgisayar Mühendisliği bölümünden 2021 yılında mezun
olması beklenmektedir</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading} >Murad Abaszada</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>11.12.1998'de Azerbaycanın başkenti Baküde doğdu.
Üniversite öncesi eğitiminin tamamını Azerbaycan Güzel Sanatlar lisesinde aldı.
2016 yılında lise eğitimini tamamladıktan sonra aynı yılda Sakarya Üniversitesi
Bilgisayar Mühendisliği bölümünde eğitime başladı. 2020 yılında stajını Senkron
Yazılım Hizmetleri A. Ş. şirketinde full-stack developer olarak yaptı. Şu an Sakarya
Üniversitesinde son sınıf öğrencisidir.</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  view: state.view
});

export default connect(mapStateToProps, { openNavbar, openFooter })(AboutUs);
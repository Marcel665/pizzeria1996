import Card from "./Card";

const AboutSection = () => {
    return ( 
        <section className="about">
            <Card style={{gridArea: 'about_grid_1'}}>
                <h2>O naszej restauracji</h2>
                <p>Nasza restauracja to miejsce, w którym włoska gościnność spotyka się z wyjątkową kuchnią. Tworzymy menu z miłości do autentycznych smaków, dbając o każdy detal – od świeżych produktów po doskonale dobrane przyprawy. Chcemy, aby każdy posiłek był niepowtarzalnym doświadczeniem.</p>
            </Card>
            <Card style={{gridArea: 'about_grid_2'}}>
                <img src="/images/intro_1.jpg" alt="about_1" title="about_1"/>    
            </Card>
            <Card style={{gridArea: 'about_grid_3'}}>
                <h2>Tradycja</h2>
                <p>Historia naszej restauracji sięga 1996 roku, kiedy to postanowiliśmy wprowadzić na lokalny rynek prawdziwe włoskie smaki. Od tamtej pory nasza pasja do gotowania nieustannie rośnie, a nasza kuchnia ewoluuje, łącząc tradycję z nowoczesnym podejściem do gastronomii.</p>
            </Card>
            <Card style={{gridArea: 'about_grid_4'}}>
                <img src="/images/intro_2.jpg" alt="about_2" title="about_2"/>
            </Card>
            <Card style={{gridArea: 'about_grid_5'}}>
                <h2>Historia</h2>
                <p>Tradycja jest dla nas fundamentem każdej potrawy. Dbamy o to, aby receptury i techniki gotowania były zgodne z włoskimi standardami, a każde danie oddawało ducha włoskich rodzinnych spotkań. To dzięki temu nasi goście wracają do nas z radością i smakiem.</p>
            </Card>
            <Card style={{gridArea: 'about_grid_6'}}>
                <img src="/images/intro_4.jpg" alt="about_3" title="about_3"/>    
            </Card>
        </section>
     );
}
 
export default AboutSection;
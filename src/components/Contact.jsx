const Contact = () => {
    return ( 
        <section className="contact">
            <h1>Kontakt</h1>
            <form>
                <input type="text" placeholder="mail@mail.com"/>
                <input type="text" placeholder="wiadomość..."/>
                <input type="submit" value='Wyślij'/>
            </form>
        </section>
     );
}
 
export default Contact;
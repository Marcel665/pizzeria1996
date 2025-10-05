import Card from "./Card";

const Menu = () => {
    const data = [
        {
    "title": "Margherita",
    "price": "26",
    "ingredients": ["sos pomidorowy", "ser mozzarella", "bazylia", "oregano"]
  },
  {
    "title": "Funghi",
    "price": "29",
    "ingredients": ["sos pomidorowy", "ser mozzarella", "pieczarki", "oregano"]
  },
  {
    "title": "Capricciosa",
    "price": "32",
    "ingredients": ["sos pomidorowy", "ser mozzarella", "szynka", "pieczarki", "oliwki", "oregano"]
  },
  {
    "title": "Pepperoni",
    "price": "33",
    "ingredients": ["sos pomidorowy", "ser mozzarella", "salami pepperoni", "oregano"]
  },
  {
    "title": "Hawajska",
    "price": "31",
    "ingredients": ["sos pomidorowy", "ser mozzarella", "szynka", "ananas", "oregano"]
  },
  {
    "title": "Quattro Formaggi",
    "price": "35",
    "ingredients": ["sos śmietanowy", "mozzarella", "gorgonzola", "parmezan", "ser pleśniowy"]
  },
  {
    "title": "Vegetariana",
    "price": "30",
    "ingredients": ["sos pomidorowy", "ser mozzarella", "papryka", "cebula", "oliwki", "kukurydza", "pieczarki", "rukola"]
  },
  {
    "title": "Diavola",
    "price": "34",
    "ingredients": ["sos pomidorowy", "ser mozzarella", "pikantne salami", "papryczki chili", "cebula", "oregano"]
  }
    ]

    return ( 
        <section className="menu">
            <h1>Polecane przez nas</h1>
            {data.map((item, index) => (
                <Card key={index}>
                    <h2>{item.title} / ${item.price}</h2>
                    <p>{item.ingredients.join(' / ')}</p>
                    <div className="divider divider-l" style={{backgroundColor: "black"}}/>
                    <div className="divider" style={{backgroundColor: "black"}}/>
                </Card>
            ))}
        </section>
     );
}
 
export default Menu;
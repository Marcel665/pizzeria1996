const Gallery = () => {
    return ( 
        <section className="gallery">
            <img src="/images/gallery_1.jpg" alt="galeria_1" title="galeria_1" style={{gridArea: 'gallery_grid_1'}}/>
            <img src="/images/gallery_3.jpg" alt="galeria_2" title="galeria_2" style={{gridArea: 'gallery_grid_2'}}/>
            <img src="/images/gallery_2.jpg" alt="galeria_3" title="galeria_3" style={{gridArea: 'gallery_grid_3'}}/>
            <img src="/images/gallery_4.jpg" alt="galeria_4" title="galeria_4" style={{gridArea: 'gallery_grid_4'}}/>
        </section>
     );
}
 
export default Gallery;
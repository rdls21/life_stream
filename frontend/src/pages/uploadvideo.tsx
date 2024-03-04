import Header from "./components/header";
import "./uploadvideo.css"
import { ChangeEvent, useState } from 'react';




export default function Uploadvideo(){    

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        tags: '',
        // image: null as File | null,
        // video: null as File | null
      });
    
      const handleChange = (e:  ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
    //   const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     const file = e.target.files?.[0];
    //     setFormData({
    //       ...formData,
    //       image: file
    //     });
    //   };
    
    //   const handleVideoChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     const file = e.target.files?.[0];
    //     setFormData({
    //       ...formData,
    //       video: file
    //     });
    //   };
    
      const handleSubmit = async () => {
        try {
            const response = await fetch('/uploadvideo', {
              method: 'post',
              body: JSON.stringify(formData)
            });
      
            if (!response.ok) {
              throw new Error('Error al enviar los datos');
            }
      
            console.log('Datos enviados correctamente');
          } catch (error) {
            console.error('Error:', error);
          }
        console.log(formData);
      };
    
      return (
        <>
            <Header />
            <div className="formContainer">
                <form  className="form">
                    <div>
                        <label htmlFor="title">Título:</label>
                        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="description">Descripción:</label>
                        <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="tags">Etiquetas (separadas por comas):</label>
                        <input type="text" id="tags" name="tags" value={formData.tags} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="image">Imagen:</label>
                        <input type="file" id="image" name="image" accept="image/*" /*onChange={handleImageChange}*/  />
                    </div>
                    <div>
                        <label htmlFor="video">Video:</label>
                        <input type="file" id="video" name="video" accept="video/*" /*onChange={handleVideoChange}*/  />
                    </div>
                    <button className="button" type="button" onClick={handleSubmit}>Enviar</button>
                </form>
            </div>
        </>
      );
}
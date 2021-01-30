import React, { useState } from 'react'


 
const AddMovieForm = (props) => {
    const [movie, setMovie] = useState({ title: "", description: "" })
    const handleChange = (event) => {
        const { value, name } = event.target
        setMovie({ ...movie, [name]: value })
        console.log(movie)
    }
    
    const HandleSubmit  = () =>{
        // you code here git init
     props.addMovie(movie)
    
    }
    return (
    
        <div className='one'>
            
                
        
            <form>
                <label>Title</label>
                <input name='title' className="form-control" placeholder='entry the movie title...' value={movie.title} onChange={handleChange} />
                <label>Description</label>
                <input name='description' className="form-control" value={movie.description} onChange={handleChange} />
                <button type="button" onClick={HandleSubmit} className="btn btn-primary"  >submit</button>

            </form>

        </div>
    )
    }

    export default AddMovieForm

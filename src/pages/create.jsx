import { useState } from "react";

const Form = ()=>{

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");    
    const [cover, setCover] = useState("");
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState(false);
    const [review, setReview] = useState("");
    const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;

        if(name === "title"){
            setTitle(value);
        }else if (name === "author"){
            setAuthor(value)
        }else if(name === "cover"){
            setCover(value)
        }else if(name === "description"){
            setDescription(value);
        }else if (name === "completed"){
            setCompleted(e.target.checked);
        }else if (name === "review"){
            setReview(value);
        }
        console.log(title)
        console.log(description)
        console.log(author)
        console.log(completed);
    }

    function handleChangeFile(e){
        const element = e.target;
        const file = element.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = function () {
            setCover(reader.result.toString());
        };
    }

    function handleSubmit(e){
        e.preventDefault();

        const newBook = {
            id: crypto.randomUUID(),
            title: title,
            author: author,
            cover: cover,
            description: description,
            completed: completed,
            review: review
        }
    }
    return (
        <form action="" onSubmit={handleSubmit}>
                <div>
                    <h1>Title</h1>
                    <input 
                    type="text" 
                    name="title" 
                    onChange={handleChange}
                    value={title}/>
                </div>
                <div>
                    <h1>Author</h1>
                    <input 
                    type="text" 
                    name="author" 
                    onChange={handleChange}
                    value={author}/>
                </div>
                <div>
                    <h1>Cover</h1>
                    <input 
                    type="file" 
                    name="cover" 
                    accept=".pdf"
                    onChange={handleChangeFile}
                    />
                <div>
                    {cover ? <img src={cover} width="200" alt="book-img"/> : false}
                </div>
                </div>
                <div>
                <h1>Description</h1>
                    <input 
                    type="text" 
                    name="description" 
                    onChange={handleChange}
                    value={description}/>
                </div>
                <div>
                    <h1>Completed</h1>
                    <input 
                    type="checkbox" 
                    name="completed" 
                    onChange={handleChange}
                    value={completed}/>
                </div>
                <div>
                    <h1>Review</h1>
                    <input 
                    type="text" 
                    name="review" 
                    onChange={handleChange}
                    value={review}/>
                </div>
                <input type="submit" value="Register book" />
            </form>
    );
}

export default Form;
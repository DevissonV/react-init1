import { useState } from "react";
import { AddCategory,GitGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['messi']);

    const onAddCategory = (NewCategory) => {
        if(categories.includes(NewCategory)) return;
        setCategories([NewCategory, ...categories]);
    }


    return (
        <>
            <h1>GifExpert</h1>

            <AddCategory 
                onNewCategory={(value)=>onAddCategory(value)}
            />
            
            {
                categories.map((category) => 
                    (
                        <GitGrid 
                            key={category} 
                            category={category}
                        />
                    )
                )
            }


            {/* gif item */}
        </>
    )
}

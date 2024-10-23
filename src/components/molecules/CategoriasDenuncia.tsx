import { useState } from "react";
interface Categoria {
    value: string; 
    label: string;
}
function HacerDenuncia() {
    const categorias: Categoria[] = [
        { value: '', label: 'Seleccione una categoría' },
        { value: 'Robo', label: 'Robo' },
        { value: 'Violencia domestica', label: 'Violencia doméstica' },
        { value: 'Acoso sexual', label: 'Acoso sexual' },
        { value: 'Fraude o estafa', label: 'Fraude o estafa' },
        { value: 'Delitos ciberneticos', label: 'Delitos cibernéticos' },
        { value: 'Vandalismo', label: 'Vandalismo' },
        { value: 'Narcotrafico o consumo de drogas', label: 'Narcotráfico o consumo de drogas' },
        { value: 'Desaparicion de personas', label: 'Desaparición de personas' },
        { value: 'Abuso de autoridad', label: 'Abuso de autoridad' },
        { value: 'Corrupción', label: 'Corrupción' },
        { value: 'Maltrato animal', label: 'Maltrato animal' },
        { value: 'Amenazas', label: 'Amenazas' },
        { value: 'Contaminacion ambiental', label: 'Contaminación ambiental' }
    ];
    const [selectedCategory, setSelectedCategory] = useState('');

    const categoria = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedCategory(value);
        localStorage.setItem('categoria', value);
    };


    return ( 
        <>
            <div className="flex justify-center">
            <select className="h-10 w-64 bg-white text-gray-700 border 
            border-gray-300 rounded-lg shadow-md focus:outline-none 
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
            transition duration-300 ease-in-out px-3"
            onChange={categoria}>
                {categorias.map((option) => (
            <option key={option.value} value={option.value} className="text-gray-700">
                {option.label}
            </option>
        ))}
    </select>
</div>
        </>
    );
}

export default HacerDenuncia;
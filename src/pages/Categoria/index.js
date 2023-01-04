import Header from "components/Header/index";
import { useSelector } from "../../../node_modules/react-redux/es/exports";
import { useParams } from "react-router-dom";

export default function Categoria() {
    const { nomeCategoria } = useParams();
    const categoria = useSelector(state => state.categorias.find(categoria => categoria.id === nomeCategoria));
    return (
        <div>
            <Header 
                titulo={categoria.nome}
                descricao={categoria.descricao}
                imagem={categoria.header}
            />
        </div>
    )
}
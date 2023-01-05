import Header from "components/Header/index";
import { useSelector } from "../../../node_modules/react-redux/es/exports";
import { useParams } from "react-router-dom";
import styles from './Categoria.module.scss';

export default function Categoria() {
    const { nomeCategoria } = useParams();
    const { categoria, itens } = useSelector(state => ({
        categoria: state.categorias.find(categoria => categoria.id === nomeCategoria),
        itens: state.itens.filter(item => item.categoria === nomeCategoria)
    }));

    return (
        <div>
            <Header 
                titulo={categoria.nome}
                descricao={categoria.descricao}
                imagem={categoria.header}
            />
            <div className={styles.itens}>
                {itens?.map(item => (
                    <div key={item.id}>
                        {item.titulo}
                    </div>
                ))}
            </div>
        </div>
    )
}
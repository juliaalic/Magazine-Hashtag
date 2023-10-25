import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtrosCatalogo";
import { atualizarPrecoCarrinho, inicializarCarrinho, renderizarProdutosCarrinho } from "./src/menuCarrinho";

atualizarPrecoCarrinho();
renderizarCatalogo();
renderizarProdutosCarrinho();
inicializarCarrinho();
inicializarFiltros();
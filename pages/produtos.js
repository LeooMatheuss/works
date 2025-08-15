const produtos = [
    { nome: 'Produto 1', descricao: 'Descrição do Produto 1', preco: '99,90' },
    { nome: 'Produto 2', descricao: 'Descrição do Produto 2', preco: '149,90' },
  ];
  
  export default function Produtos() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {produtos.map((produto, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{produto.nome}</h2>
            <p>{produto.descricao}</p>
            <p className="text-green-600 font-bold">R$ {produto.preco}</p>
          </div>
        ))}
      </div>
    );
  }
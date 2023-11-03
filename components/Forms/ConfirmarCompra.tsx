import { useAppState } from "@/hooks/AppStateContext";
import { FormEvent } from "react";

export default function Example() {
  const { globalState, setGlobalState } = useAppState();

  const cadastrar = (e: FormEvent) => {
    e.preventDefault();
    setGlobalState((prevState: any) => ({
      ...prevState,
      Confirmacao: false,
    }));

    setTimeout(() => alert("Compra realizada com sucesso!"), 1000);
  };

  return (
    <>
      <div
        style={{
          background: "#C1C1C1",
          padding: "40px 120px",
          borderRadius: 10,
        }}
      >
        <form onSubmit={cadastrar}>
          <h1 style={{ fontSize: 40 }}>Confirmar dados</h1>
          <h2>Dados pessoais</h2>
          <p>
            <label>Nome completo</label>
          </p>
          <input
            value="João Silva dos Santos"
            style={{ width: "100%" }}
            type="text"
          />

          <p>
            <label>CPF</label>
          </p>
          <input value="16693975779" style={{ width: "100%" }} type="text" />

          <p>
            <label>Endereço completo</label>
          </p>
          <input
            value="Rua Rio de Janeiro, 2000"
            style={{ width: "100%" }}
            type="text"
          />

          <h2>Dados financeiros</h2>
          <p>
            <label>Nome do titular no cartão</label>
          </p>
          <input
            value="JOAO S DOS SANTOS"
            style={{ width: "100%" }}
            type="text"
          />
          <p>
            <label>Numero do cartão</label>
          </p>
          <input
            value="9888 9999 2222 1111"
            style={{ width: "100%" }}
            type="text"
          />
          <p>
            <label>CVC</label>
          </p>
          <input style={{ width: "100%" }} type="text" />
          <button
            type="submit"
            style={{
              marginTop: 30,
              width: "100%",
              height: 40,
              fontSize: 20,
              fontWeight: "bold",
              background: "#02F67C",
              border: "none",
              color: "#fff",
            }}
          >
            COMPRAR
          </button>
        </form>
      </div>
    </>
  );
}

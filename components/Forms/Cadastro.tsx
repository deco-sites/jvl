import { useAppState } from "@/hooks/AppStateContext";
import { FormEvent } from "react";

export default function Example() {
  const { globalState, setGlobalState } = useAppState();

  const cadastrar = (e: FormEvent) => {
    e.preventDefault();
    setGlobalState((prevState: any) => ({
      ...prevState,
      Cadastro: false,
      Cadastrado: true,
    }));

    setTimeout(() => alert("Usuário cadastrado com sucesso!"), 1000);
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
          <h1 style={{ fontSize: 40 }}>Cadastro do usuário</h1>
          <h2>Dados pessoais</h2>
          <p>
            <label>Nome completo</label>
          </p>
          <input style={{ width: "100%" }} type="text" />

          <p>
            <label>CPF</label>
          </p>
          <input style={{ width: "100%" }} type="text" />

          <p>
            <label>Endereço completo</label>
          </p>
          <input style={{ width: "100%" }} type="text" />

          <h2>Dados financeiros</h2>
          <p>
            <label>Nome do titular no cartão</label>
          </p>
          <input style={{ width: "100%" }} type="text" />
          <p>
            <label>Numero do cartão</label>
          </p>
          <input style={{ width: "100%" }} type="text" />
          <label>
          <input
          style={{marginTop: 20}}
            type="checkbox"
            name="opcao1"
          />
          Aceitar os termos e condições da plataforma.
        </label>
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
              color: "#FFF"
            }}
          >
            Cadastrar
          </button>
        </form>
      </div>
    </>
  );
}

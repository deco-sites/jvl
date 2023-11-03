import { useAppState } from "@/hooks/AppStateContext";

const CompraRapida = () => {
  const { globalState, setGlobalState } = useAppState();

  const confirmarCompra = () => {
    setGlobalState((prevState: any) => ({
      ...prevState,
      Confirmacao: true,
    }));
  };

  return (
    <>
      <button
      onClick={confirmarCompra}
        style={{
          display: globalState.Cadastrado ? "block" : "none",
          background: "green",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        COMPRA RÁPIDA
      </button>
    </>
  );
};

export default CompraRapida;

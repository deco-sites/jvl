import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import BannerDesktop from "@/public/banner_desktop.svg";
import BannerMobile from "@/public/banner_mobile.svg";
import CloseBtn from "@/public/XCircleFill.svg";
import { useSizeScreen } from "@/hooks/useSizeScreen";
import { useAppState } from "@/hooks/AppStateContext";

export default function Example() {
  const { width, height } = useSizeScreen();
  const { globalState, setGlobalState } = useAppState();

  const openModal = () => {
    setGlobalState((prevState: any) => ({
      ...prevState,
      CTA: true,
    }));
  };

  const closeModal = () => {
    setGlobalState((prevState: any) => ({
      ...prevState,
      CTA: false,
    }));
  };

  const realizarCadastro = () => {
    setGlobalState((prevState: any) => ({
      ...prevState,
      CTA: false,
      Cadastro: true,
    }));
  };

  useEffect(() => {
    setTimeout(openModal, 5000);
  }, []);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={globalState.CTA} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {width >= 900 ? (
                    <Image
                      src={BannerDesktop}
                      style={{ width: "75%", height: "auto" }}
                      alt={"BannerDesktop"}
                      onClick={realizarCadastro}
                    />
                  ) : (
                    <Image
                      src={BannerMobile}
                      style={{ width: "75%", height: "auto" }}
                      alt={"BannerMobile1"}
                      onClick={realizarCadastro}
                    />
                  )}
                  <div
                    style={{ position: "absolute", top: "1rem", right: "1rem" }}
                  >
                    <Image
                      src={CloseBtn}
                      alt={"Close"}
                      style={{
                        transform:
                          width >= 900
                            ? "translate(-200px, -10px)"
                            : "translate(-50px, -5px)",
                        width: width >= 900 ? 45 : 35,
                        height: width >= 900 ? 45 : 35,
                      }}
                      onClick={closeModal}
                    />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

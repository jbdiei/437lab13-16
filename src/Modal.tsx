import { useRef } from "react";

interface ModalProps{
  isOpen: boolean;
  onCloseRequested: () => void;
  headerLabel: string;
  children: React.ReactNode;



}

function Modal({ isOpen, onCloseRequested, headerLabel,  children }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null; 

  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
      onCloseRequested();
    }
  }
  
  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/50  flex items-center justify-center z-50"
    >
      <div
        ref={dialogRef}
        className="bg-white rounded-md shadow-lg w-96 max-w-full p-4"
      >
        {/* Header */}
        <div className="flex justify-between items-center  pb-2 mb-4">
          <h2 className="text-lg font-semibold">{headerLabel}</h2>
          <button
            onClick={onCloseRequested}
            aria-label="Close"
            className="text-xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Content from parent */}
        {children}
      </div>
    </div>
  );
}

export default Modal;


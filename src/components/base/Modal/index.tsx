"use client"
import { DialogContent, DialogOverlay } from "@reach/dialog";
import { useTransition } from "@react-spring/web";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onDismiss?: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onDismiss, children }: ModalProps) => {
  const [transitions] = useTransition(isOpen, () => ({
    config: { duration: 200 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  }))
  console.log(transitions);
  return (
    <DialogOverlay
      isOpen={isOpen}
      onDismiss={onDismiss}
      className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.74)] z-50 px-4"
    >
      <DialogContent
        className="shadow-lg max-w-2xl w-full p-0 relative"
      >
        <X onClick={onDismiss} className="absolute top-4 right-4 z-50" />
        {children}
      </DialogContent>
    </DialogOverlay>
  )
}

export default Modal;
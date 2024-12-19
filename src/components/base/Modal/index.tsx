"use client"
import { DialogContent as ReachDialogContent, DialogOverlay as ReachDialogOverlay } from "@reach/dialog";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onDismiss?: () => void;
  children: React.ReactNode;
  isVideo?: boolean
}
const DialogOverlay = ReachDialogOverlay as any;
const DialogContent = ReachDialogContent as any;

const Modal = ({ isOpen, onDismiss, children, isVideo }: ModalProps) => {

  return (
    <DialogOverlay
      isOpen={isOpen}
      className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.74)] z-50 px-4"
      as="div"
    >
      <DialogContent
        className="shadow-lg max-w-2xl w-full p-0 relative"
      >
        <X onClick={onDismiss} color={isVideo ? 'white' : 'black'} className="absolute top-4 right-4 z-50" />
        {children}
      </DialogContent>
    </DialogOverlay>
  )
}

export default Modal;
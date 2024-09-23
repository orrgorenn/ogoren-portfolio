"use client";

import { useModal } from "@/providers/modal-provider";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

type CustomModalProps = {
  children: React.ReactNode;
  defaultOpen?: boolean;
};

const CustomModal = ({ children, defaultOpen }: CustomModalProps) => {
  const { isOpen, setClose } = useModal();

  return (
    <Dialog open={isOpen || defaultOpen} onOpenChange={setClose}>
      <DialogContent className="overflow-x-hidden bg-card md:h-fit md:max-h-[700px]">
        <DialogHeader className="text-gray-900">
          <DialogTitle className="text-2xl">Contact Me 👋</DialogTitle>
          <DialogDescription>
            Please leave your email address below and attach your message.
          </DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;

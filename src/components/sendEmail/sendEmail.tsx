"use client";
import React, { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Box, Button, Input, Textarea, useDisclosure } from "@chakra-ui/react";
import * as S from "./styles";
import { ExModal } from "./modal/modal";

export const Contactme = () => {
  const text = useRef<HTMLFormElement>(null);

  // Modal state
  const { isOpen, onOpen, onClose } = useDisclosure();

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentForm = text.current;
    if (currentForm == null) return;

    emailjs
      .sendForm(
        "service_nfzit69",
        "template_j7yfvi6",
        currentForm,
        "c8W75kWq91ZvAFj2Y"
      )
      .then(
        (result) => {
          onOpen();
          location.reload();
        },
        (error) => {
          console.log(error, "error");
          onOpen();
        }
      );
  };

  return (
    <Box data-anime='subindo' id="anchorContato" sx={S.constanteStyle}>
      <form ref={text} onSubmit={sendEmail}>
        <ExModal isOpen={isOpen} onClose={onClose}></ExModal>

        <label>Nome</label>
        <Input
          borderRadius="0"
          placeholder="Digite seu nome"
          bgColor="white"
          type="text"
          name="from_name"
        />

        <label>E-mail</label>
        <Input
          borderRadius="none"
          placeholder="Digite seu email"
          bgColor="white"
          type="email"
          name="user_email"
        />

        <label>Mensagem</label>
        <Textarea rows={10} placeholder="Digite sua mensagem aqui" name="message" />
        <div>
          <Button colorScheme="blue" type="submit">
            Enviar
          </Button>
        </div>
      </form>
    </Box>
  );
};

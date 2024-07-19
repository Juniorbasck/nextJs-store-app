"use client";

import styled from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInput, PrimaryInputWithSearchIcon } from "@/components/primary-input";
import { CartControl } from "./cart-control";

const saira_Stencil_One = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
});

interface HeaderProps {}

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;
`

const Logo = styled.a`
  color: var(--logo-color);    
  margin: 20px;
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
`

export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <Logo className={saira_Stencil_One.className}>Capputeeno</Logo>
      <div>
        <PrimaryInputWithSearchIcon placeholder="Procurando por algo específico?"/>
        <CartControl/>
      </div>
    </TagHeader>
  );
}

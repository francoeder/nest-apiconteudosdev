import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return [
      {
        "id": "7334dfa9-6a95-498f-b4b1-6b21feea62dc",
        "titulo": "Contando figuras",
        "valor": 15,
        "slug": "crj00428-contandofiguras",
        "notaAtual": 5
      },
      {
        "id": "e1d6dab9-b380-40eb-b316-3a3985778b1a",
        "titulo": "Letra de canção: Aquarela",
        "valor": 12,
        "slug": "crj00423-letradecancaoaquarela",
        "notaAtual": 4.5
      },
      {
        "id": "c72ea4de-f275-449e-9af3-c8e6d486cad0",
        "titulo": "Texto: Tartarugas",
        "valor": 14,
        "slug": "crj00422-textotartarugas",
        "notaAtual": 4
      },
      {
        "id": "dde6af22-442e-4e22-987f-fe8a8fabe3bc",
        "titulo": "Leitura de imagem",
        "valor": 11,
        "slug": "crj00421-leituradeimagem",
        "notaAtual": 4.7
      }
    ];
  }
}

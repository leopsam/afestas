import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

async function main() {
  const themeData = [
    {
      title: "PlayStation",
      category: "game",
      photo:
        "https://i.pinimg.com/originals/68/74/aa/6874aa8b07636c0b260938e5df08b0d1.jpg",
    },
    {
      title: "Disney Menina",
      category: "kids",
      photo:
        "https://i0.wp.com/itmae.com.br/wp-content/uploads/2021/07/it_mae_festa_mickey_rica_festa_0032_-.jpg?resize=750%2C750&ssl=1",
    },
    {
      title: "Xbox",
      category: "game",
      photo:
        "https://i.pinimg.com/originals/8c/eb/58/8ceb586c57d9c90dd9b6972b7f2772cb.jpg",
    },
    {
      title: "Pricesas",
      category: "kids",
      photo:
        "https://img.elo7.com.br/product/main/4199FFE/decoracao-princesas-disney-princesas-osasco.jpg",
    },
    {
      title: "Cabaré",
      category: "adult",
      photo:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHf5YnKY6jveUUkyl0RG68FoM6STwp4Si9hCz32A-h43dvm78rZBk11VDLZsJCqFV7DMzqI25bEwQB6-sq8W5gdAbtlRgkUdxoxzrb3IIF0iLy2D8qI_yv5r1VOnTXVS4EDTCtNPFUPtx7cRoR40IQbn-OgANQv7hrvsCoZLJgvBPs9OMuVXDsFa8hqA/s1600/decoracao-aniversario-cabare-min.jpg",
    },
    {
      title: "Futebol",
      category: "adult",
      photo:
        "https://lh3.googleusercontent.com/blogger_img_proxy/AByxGDRy7cjj4KgGv7BTbUVWBJi-afxEKY19zEbL-J4dAmfn-F8RKvV-OGatij_6fhNfx3F9z-Iss0b0aw-y7KBhAeX8HGmGRY6MfGO8HDqAvNFpzQIemayOn9IGepzeTaY9S6k0xlkVcG9zfKmlHNdoi4BlckcRXvZIkvw9BaBJOMSUzhAL13QK5-oSjjX01DSZUuAfUzi-mkk80JSdPYnisfiL8wcJ_k9UPu5L0Iukwpo4LTTsLPz-kppHjeudtcfMhVIijFnmmhHAkJvhb-ra3eg=w1200-h630-p-k-no-nu",
    },
    {
      title: "Frozen",
      category: "kids",
      photo:
        "https://festas.site/wp-content/uploads/2018/08/mesa-de-festa-infantil2.jpg",
    },
    {
      title: "Flamengo",
      category: "adult",
      photo:
        "https://blogger.googleusercontent.com/img/a/AVvXsEjVbidSdgOhwVHno2xfVMvzL-DCoTP3f1mEKOSrubWSwA65p_ukBmd9bSH0rHsXipPdrTnq-6fJJh3nOZ8Ed4QVF_fW1CceNFE2ewdmA4El1__6z55I2KMhCnRw23_H0sf9B-21dzu0uVtb5mgP_CvtOT1iEf6blCcMFzmOidVHIurijv1nDB_5-AlaSA",
    },
    {
      title: "Botafogo",
      category: "adult",
      photo:
        "https://4.bp.blogspot.com/-zC4s4MWB14Q/XPM6CBBs96I/AAAAAAAAmn8/7UXwYxO9N-M3MkdRjpLFBUCMLbtC6kWkACLcBGAs/s1600/decoracao-aniversario-Botafogo.jpg",
    },
    {
      title: "Flumenense",
      category: "adult",
      photo:
        "https://1.bp.blogspot.com/-fhL4EFw6lVw/WcCOlaoY9pI/AAAAAAAAYJo/8_1AGPkxPC42_eBfHzY9LjbIOZ6wS-hqwCLcBGAs/s1600/decoracao-futebol-fluminense.jpg",
    },
    {
      title: "Angry Birds",
      category: "kids",
      photo:
        "https://2.bp.blogspot.com/-fyMnPBxjSQ4/Xx5RtHcAn8I/AAAAAAAAwSk/yXimsxQ-ObMDxzo2Y7v2CuidBenN0A1RgCLcBGAsYHQ/s1600/decoracao-angry-birds-min.jpg",
    },
    {
      title: "Baby Shark",
      category: "kids",
      photo:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0mrZKWgLeB3-GRy5io4C5gZIaZhOX6-o5FOo0lnXsestbv9YBPwzi_W1JKtplcUJJGVOHa2z6LbtxgNE9YwPQnMHU7t22aPFLFweKhBLgh-8qZrqbZ5iGap0YPpBJlniFeXIF-XwmxvceAzSs30ZbLVEbb7-DI8rOJtTxmK-r1hp15QobGhvmSzbdAg/s1600/decoracao-festa-baby-Shark-min.jpg",
    },
  ];

  const serviceTypeData = [
    {
      title: "Eventos",
      description:
        "Os eventos proporcionam experiências únicas, criam memórias duradouras e promovem interações significativas entre os participantes.",
      photo:
        "https://i.pinimg.com/736x/e2/23/99/e223994161172ab0273a8fc389f09214.jpg",
    },
    {
      title: "Pegue e monte",
      description:
        'Economize e solte sua criatividade com o serviço "Pegue e Monte" e monte tudo de acordo com seu estilo e tema.',
      photo:
        "https://i.pinimg.com/originals/4e/eb/96/4eeb960ca430e10fec354cf42cf1442c.jpg",
    },
    {
      title: "Montagem de mesa",
      description:
        "Oferecemos uma variedade encantadora de decorações para mesa de festa, tornando sua celebração única e inesquecível.",
      photo:
        "https://i.pinimg.com/736x/ca/68/83/ca688387eb2cef9de7ca4402b44c595b.jpg",
    },
  ];

  const depositionData = [
    {
      name: "Marieni Cristina Sampaio",
      depositions:
        "Minha festa de aniversário foi simplesmente perfeita! A equipe da A Festas foi incrível em cada detalhe, desde a decoração até o atendimento. Fui tratada com carinho e profissionalismo, e todos os meus convidados elogiaram a festa. Foi uma noite mágica, cheia de alegria e boas lembranças. Recomendo a A Festas para todos que desejam uma festa inesquecível!",
      photo:
        "https://claudia.abril.com.br/wp-content/uploads/2019/01/pug-1.jpg?quality=85&strip=info",
    },
    {
      name: "Leonardo Pereira Sampaio",
      depositions:
        "Estou maravilhada com o trabalho da empresa Afestas! A Camilla e sua equipe fizeram a ornamentação da festa do meu filho e superaram todas as minhas expectativas. Cada detalhe foi cuidadosamente planejado e executado com perfeição. A decoração estava deslumbrante e trouxe uma atmosfera mágica para o evento. Recomendo a Afestas para todos que desejam tornar suas festas inesquecíveis. Obrigada, Camilla, pelo seu profissionalismo e dedicação!",
      photo:
        "https://i0.wp.com/techwek.com/wp-content/uploads/2020/12/imagens-de-cachorros.jpg?resize=1000%2C667&ssl=1",
    },
  ];

  const galleryData = [
    {
      name: "Festa do Lucas",
      description:
        "Festa de aniversario de 1 ano do Lucas com o tema do flamengo",
      photo:
        "https://cdn.awsli.com.br/800x800/286/286973/produto/8643168/ae2f8a23c1.jpg",
    },
    {
      name: "Casamento Leo e Mari",
      description: "Casamento com tema rustico e cores banco e turquesa",
      photo:
        "https://storage.alboom.ninja/sites/12991/albuns/615718/carol-salgado-fotografia-rio-de-janeiro-aniversrio-infantil-casa-de-festa-alegria-de-viver-tema-carnaval__6_.jpg?t=1617210665",
    },
    {
      name: "Aniversário da Sofia",
      description: "Festa de aniversário da Sofia com tema de princesa",
      photo:
        "https://www.hospsaofrancisco.com.br/wp-content/uploads/2021/12/hospital-sao-francisco_noticia-5-cuidados-para-ter-nas-festas-de-final-de-ano.jpg",
    },
    {
      name: "Formatura do Pedro",
      description: "Cerimônia de formatura do Pedro com tema de glamour",
      photo:
        "https://www.infomoney.com.br/wp-content/uploads/2019/06/festa-mulheres-.jpg?resize=900%2C515&quality=50&strip=all",
    },
    {
      name: "Festa Junina",
      description: "Festa junina com decoração típica e comidas tradicionais",
      photo:
        "https://inconal.com.br/wp-content/uploads/2021/10/regras-para-uso-do-salao-de-festas-em-condominios-de-curitiba.jpg",
    },
    {
      name: "Festa de Carnaval",
      description: "Festa de Carnaval com muita música, dança e diversão",
      photo:
        "https://unifortseguranca.com.br/wp-content/uploads/2023/01/Salao-de-festas-em-condominio-confira-o-checklist-com-6-regras-de-uso-Foto-Canva-1-1024x614.jpg",
    },
    {
      name: "Evento Corporativo",
      description: "Evento corporativo com palestras e networking",
      photo:
        "https://img.freepik.com/fotos-gratis/jovens-jovens-festivos-se-divertem-com-confetes_23-2147651889.jpg?w=2000",
    },
    {
      name: "Aniversário da Isabella",
      description: "Festa de aniversário da Isabella com tema de unicórnio",
      photo:
        "https://img.freepik.com/fotos-premium/jovens-no-clube-dancam-e-cantam_85574-1678.jpg?w=2000",
    },
    {
      name: "Casamento de Paula e Rafael",
      description: "Casamento romântico com decoração em tons de rosa",
      photo:
        "https://s3.amazonaws.com/blog.dentrodahistoria.com.br/wp-content/uploads/2021/10/01114059/festas_populares.png",
    },
    {
      name: "Festa à Fantasia",
      description:
        "Festa temática à fantasia com trajes criativos e divertidos",
      photo:
        "https://i0.wp.com/grupobisutti.com.br/wp-content/uploads/2022/08/2022-08-02-GB7087_.rafaelcruz_fotografia.jpeg?resize=900%2C601&ssl=1",
    },
    {
      name: "Batizado da Maria",
      description: "Cerimônia de batizado da Maria em uma igreja histórica",
      photo:
        "https://cdn.pixabay.com/photo/2016/03/27/22/05/baptism-1286987_960_720.jpg",
    },
    {
      name: "Festa de Natal",
      description:
        "Festa de Natal com decoração temática e distribuição de presentes",
      photo:
        "https://asset1.zankyou.com/images/mag-post/0d2/59e3/685//-/br/wp-content/uploads/2017/03/jigger-open-bar.jpg",
    },
    {
      name: "Conferência de Negócios",
      description: "Conferência de negócios com palestras e workshops",
      photo:
        "https://asset1.zankyou.com/images/mag-post/78a/c5d7/685//-/br/wp-content/uploads/2017/03/z-ba-Vit%C3%B3ria-Shakers-Foto-Diferente-em-Tudo.jpg",
    },
    {
      name: "Baile de Máscaras",
      description: "Baile de máscaras com elegância e mistério",
      photo:
        "https://seletodrinks.com.br/blog/wp-content/uploads/2018/06/bar-seleto-drinks-maravilhosos-min.jpg",
    },
  ];

  for (const themeDataItem of themeData) {
    await prisma.theme.create({ data: themeDataItem });
  }

  for (const serviceTypeDataItem of serviceTypeData) {
    await prisma.serviceType.create({ data: serviceTypeDataItem });
  }

  for (const depositionDataItem of depositionData) {
    await prisma.depositions.create({ data: depositionDataItem });
  }

  for (const galleryDataItem of galleryData) {
    await prisma.gallery.create({ data: galleryDataItem });
  }
}

main()
  .then(() => {
    console.log("seed");
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

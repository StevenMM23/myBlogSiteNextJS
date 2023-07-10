describe("Pruebas del componente Hero", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Debe mostrar los atributos de la imagen correctamente", () => {
    cy.get("[data-testid='image-test']").should(($img) => {
      const alt = $img.prop("alt");
      const width = $img.prop("width");
      const height = $img.prop("height");
      expect(alt).to.equal("An Image showing Steven");
      expect(width).to.equal(800);
      expect(height).to.equal(800);
    });
  });

  it("Debe mostrar el título correctamente", () => {
    cy.get("[data-cy='hero-title']")
      .should("be.visible")
      .and("have.text", "Economía Blog");
  });

  it("Debe mostrar la descripción correctamente", () => {
    cy.get("[data-cy='hero-description']")
      .should("be.visible")
      .and(
        "have.text",
        "Bienvenido al blog de Economía que te llevará a conocer todas esas noticias sobre el mundo financiero. Aprende, crece y alcanza la libertad financiera en cada artículo. Únete a nuestra comunidad y comienza a transformar tu vida hoy mismo."
      );
  });
});

describe("Prueba del componente Footer", () => {
  it("Debe mostrar el texto y el enlace correctamente", () => {
    cy.visit("http://localhost:3000");

    cy.get("[data-testid='footer']").should("be.visible");

    cy.get("[data-testid='footer'] a")
      .should("have.attr", "href", "https://eldinero.com.do")
      .and("have.attr", "target", "_blank")
      .and("have.attr", "rel", "noopener noreferrer")
      .and("have.text", "https://eldinero.com.do");
  });
});

describe("Pruebas de FeaturedPost", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Debe mostrar el componente FeaturedPost correctamente", () => {
    cy.get("[data-testid='featured-post']").should("be.visible");
    cy.get("[data-testid='featured-post-title']").should("be.visible").and("have.text", "Publicaciones");
    cy.get("[data-testid='posts-grid']").should("be.visible");
    cy.get("[data-testid='post-item']").should(($postItems) => {
      expect($postItems).to.have.length(10);
    });
  });
});
describe("Pruebas de PostItems", () => {
  const mockPost = {
    slug: "post1",
    title: "Título del Post 1",
    image: "post1.jpg",
    excerpt: "Extracto del Post 1",
    date: "2023-07-01",
  };

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Debe mostrar el componente PostItems con los datos correctos", () => {
    cy.get("[data-testid='post-item']").should("be.visible");

    cy.get("[data-testid='post-item'] [data-testid='post-link']").should("have.attr", "href", `/posts/${mockPost.slug}`);
    cy.get("[data-testid='post-item'] [data-testid='post-link'] [data-testid='post-image']").should("have.attr", "src", `/images/posts/${mockPost.slug}/${mockPost.image}`);
    cy.get("[data-testid='post-item'] [data-testid='post-link'] [data-testid='post-image']").should("have.attr", "alt", mockPost.title);

    cy.get("[data-testid='post-item'] [data-testid='post-content'] [data-testid='post-title']").should("be.visible").and("have.text", mockPost.title);
    cy.get("[data-testid='post-item'] [data-testid='post-content'] [data-testid='post-date']").should("be.visible").and("have.text", new Date(mockPost.date).toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }));
    cy.get("[data-testid='post-item'] [data-testid='post-content'] [data-testid='post-excerpt']").should("be.visible").and("have.text", mockPost.excerpt);
  });
});
describe("Pruebas de ContactForm", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/contact");
  });

  it("Debe mostrar el componente ContactForm correctamente", () => {
    cy.get("[data-testid='contact-form']").should("be.visible");
    cy.get("[data-testid='email-input']").should("be.visible").and("have.attr", "type", "email");
    cy.get("[data-testid='name-input']").should("be.visible").and("have.attr", "type", "text");
    cy.get("[data-testid='message-textarea']").should("be.visible").and("have.attr", "rows", "5");
    cy.get("[data-testid='submit-button']").should("be.visible").and("have.text", "Enviar");
  });

  it("Debe permitir el ingreso de datos en los campos del formulario", () => {
    const email = "test@example.com";
    const name = "John Doe";
    const message = "Este es un mensaje de prueba.";

    cy.get("[data-testid='email-input']").type(email).should("have.value", email);
    cy.get("[data-testid='name-input']").type(name).should("have.value", name);
    cy.get("[data-testid='message-textarea']").type(message).should("have.value", message);
  });

  it("Debe enviar el formulario al hacer clic en el botón Enviar", () => {
    const email = "test@example.com";
    const name = "John Doe";
    const message = "Este es un mensaje de prueba.";

    cy.get("[data-testid='email-input']").type(email);
    cy.get("[data-testid='name-input']").type(name);
    cy.get("[data-testid='message-textarea']").type(message);
    cy.get("[data-testid='submit-button']").click();

    // Asegurar que se realice una solicitud POST a "/api/contact" con los datos ingresados
    cy.intercept("POST", "/api/contact").as("sendMessage");
    cy.wait("@sendMessage").should((interception) => {
      expect(interception.request.body).to.deep.equal({
        email,
        name,
        message,
      });
    });
  });
});
describe("Pruebas de MainNavigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Debe mostrar el componente MainNavigation correctamente", () => {
    cy.get("[data-testid='main-navigation']").should("be.visible");
    cy.get("[data-testid='navigation-list']").should("be.visible");
    cy.get("[data-testid='posts-link']").should("be.visible").and("have.attr", "href", "/posts");
    cy.get("[data-testid='contact-link']").should("be.visible").and("have.attr", "href", "/contact");
  });

  it("Debe redirigir a la página de Publicaciones al hacer clic en el enlace 'Publicaciones'", () => {
    cy.get("[data-testid='posts-link']").click();
    cy.url().should("include", "/posts");
  });

  it("Debe redirigir a la página de Contáctanos al hacer clic en el enlace 'Contáctanos'", () => {
    cy.get("[data-testid='contact-link']").click();
    cy.url().should("include", "/contact");
  });
});


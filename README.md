# 🍳 Blog de Recetas

## 📘 Descripción

Blog de recetas hecho con **React**, que permite:

- Visualizar recetas en una página principal.
- Agregar, editar y eliminar recetas desde una página de administración.
- Almacenar los datos de forma persistente usando **localStorage**.

---

## 🚀 Instalación y ejecución

1. Cloná el repositorio:

bash
git clone https://github.com/tu-usuario/blog-recetas.git
cd blog-recetas
Instalá las dependencias:

bash
Copiar
Editar
npm install
Ejecutá el proyecto:

bash
Copiar
Editar
npm run dev

## 🧩 Componentes
RecetaCard: Muestra los detalles de una receta.

RecetaForm: Formulario con inputs para título, ingredientes, pasos, etc.

Home: Página principal donde se listan las recetas.

Admin: Página para agregar, editar o eliminar recetas.

## 💾 LocalStorage
Las recetas se guardan en el navegador usando localStorage, bajo la clave:

arduino
Copiar
Editar
"recetas"
Esto asegura que la información persiste aunque se recargue la página.

## ✅ Funcionalidades
 Agregar nuevas recetas.

 Editar recetas existentes.

 Eliminar recetas.

 Almacenamiento persistente con localStorage.

🛠 Tecnologías
React

React Router DOM

localStorage

Vite (opcional, pero recomendado)

Bootstrap o CSS propio

## 📌 Notas
Validá que todos los campos estén completos antes de guardar.

Si no hay recetas cargadas, se muestra un mensaje indicando que no hay resultados.

Las recetas se identifican con un ID único (timestamp o UUID).

## ✍️ Autor
Desarrollado por [Juan Manuel Blanco]
Proyecto: Blog de Recetas 🍝

¡A cocinar con código! 👨‍🍳👩‍🍳
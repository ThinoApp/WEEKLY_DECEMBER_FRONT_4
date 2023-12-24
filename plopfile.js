export default function (plop) {
  plop.setGenerator("container", {
    description: "Create a React container",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your container name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/containers/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/Container.tsx.hbs",
      },
    ],
  });
  plop.setGenerator("ui", {
    description: "Create a React components",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{name}}.scss",
        templateFile: "plop-templates/Component.scss.hbs",
      },
    ],
  });
}

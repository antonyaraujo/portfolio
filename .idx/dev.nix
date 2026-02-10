{ pkgs, ... }: {
  # Use "unstable" para ter sempre as versões mais recentes (evita erro do Vite)
  channel = "unstable";

  packages = [
    pkgs.nodejs_20                 # O runtime do JavaScript
    pkgs.nodePackages.firebase-tools # A CLI do Firebase para o deploy
  ];

  idx = {
    extensions = [
      "svelte.svelte-vscode"
      "vue.volar"
      # Adicione outras extensões que você usa
    ];

    previews = {
      enable = true;
      previews = {
        web = {
          # O comando exato depende do seu framework (Vite, Next, etc)
          # O exemplo abaixo é padrão para Vite:
          command = [
            "npm"
            "run"
            "dev"
            "--"
            "--port"
            "$PORT"
            "--host"
            "0.0.0.0"
          ];
          manager = "web";
        };
      };
    };
  };
}
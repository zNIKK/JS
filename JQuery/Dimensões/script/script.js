let box = $(".box");


box.append(
    "largura: ", box.width(), "<br>",
    "largura + padding: ", box.innerWidth(), "<br>",
    "largura + padding + borda: ", box.outerwidth(), "<br>",
    "largura + padding + borda + margem: ", box.outerwidth(true)
    );
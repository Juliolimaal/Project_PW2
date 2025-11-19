export function NotFound() {
    
    const element = document.createElement("div");

    element.innerHTML = `<div class="flex h-screen justify-center items-center">
        <h1 class="font-bold text-3xl">Pagina não encontrada</h1>
    </div>`

    return element;
}
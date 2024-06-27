function CartItem(item) {
    const basket = document.createElement('div')
    const left_basket = document.createElement('div')
    const right_basket = document.createElement('div')
    const img_basket = document.createElement('img')
    const nav_left = document.createElement('div')
    const name_prod = document.createElement('h3')
    const grid_prod = document.createElement('div')
    const mines = document.createElement('button')
    const many = document.createElement('div')
    const plus = document.createElement('button')
    const price = document.createElement('p')
    const remove = document.createElement('button')

    basket.className = 'basket'
    left_basket.className = 'left_basket'
    right_basket.className = 'right_basket'
    img_basket.className = 'img_basket'
    nav_left.className = 'nav_left'
    name_prod.className = 'name_prod'
    grid_prod.className = 'grid_prod'
    mines.className = 'mines'
    many.className = 'many'
    plus.className = 'plus'
    price.className = 'price'
    remove.className = 'remove'
    name_prod.innerHTML = item.title.length > 30 ? item.title.slice(0, 30) + "..." : item.title
    mines.innerHTML = '-'
    many.innerHTML = '1'
    plus.innerHTML = '+'
    price.innerHTML = item.price  
    remove.innerHTML = 'Remove'
    img_basket.src = item.image
    basket.append(left_basket,right_basket)
    left_basket.append(img_basket,nav_left)
    nav_left.append(name_prod,grid_prod)
    grid_prod.append(mines,many,plus)
    right_basket.append(price,remove)

    mines.onclick = () => {
        if (many.innerHTML > 0) {
            many.innerHTML--
            price.innerHTML = item.price * many.innerHTML
        }
    }
    plus.onclick = () => {
        many.innerHTML++
        price.innerHTML = item.price * many.innerHTML

    }
    remove.onclick = () => {
        cart.splice(basket,1)
        basket.remove()
    }
    return basket
}

/**
 * @param {import('react-router-dom').NavigateFunction} navigate
 * @param {string} id
 * @param {{ replace?: boolean, onProductCategory?: (id: string) => void }} [options]
 */
export function navigateFromHeroCategory(navigate, id, options = {}) {
  const { replace = false, onProductCategory } = options

  if (id === 'tapizado') {
    navigate('/servicios', {
      state: { svc: 'tapizado' },
      ...(replace ? { replace: true } : {}),
    })
    return
  }

  if (onProductCategory) {
    onProductCategory(id)
    return
  }

  navigate('/productos', { state: { cat: id } })
}

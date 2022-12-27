const MainArticle = ( {title, image, text, text2, text3, text4, text5}) => {
  return (
    <section className="post">
	<article className="major">
		<h1 className = 'flex justifyContent'>{title}</h1>
		<p>{text}</p>
        <p>{text2 ? text2 : ''}</p>
        <p>{text3 ? text3 : ''}</p>
        <p>{text4 ? text4 : ''}</p>
        <p>{text5 ? text5 : ''}</p>

	</article>
	<div className="image main">
        <img src="images/pic01.jpg" alt="" /></div>
	
</section>
  )
}

export default MainArticle
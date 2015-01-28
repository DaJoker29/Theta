<?php get_header(); ?>
<?php get_sidebar(); ?>
<main class="content" role="main">
    <div class="posts">
        <!-- Loop Starts Here -->
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

        <!-- Post -->
        <article id="post-<?php the_id(); ?>"class="post">
            <!-- Post Heading -->
            <header class="post-heading">
                <!-- Post Title -->
                <h2 class="post-title"><a href="<?php the_permalink(); ?>" rel="bookmark" title="Permalink to <?php the_title_attribute(); ?>"><?php the_title() ?></a></h2>
                <!-- Post Meta -->
                <div class="post-meta">
                    <span class="post-date"><?php the_time( 'n . j . Y' ); ?></span>
                    <span class="post-author"><a href="<?php the_author_link(); ?>"><?php the_author(); ?></a></span>
                </div>
            </header>
            <!-- Post Body -->
            <div class="post-body">
                <?php the_content('Read the rest of this entry &raqao;' );; ?>
            </div>
            <!-- Post Actions -->
            <div class="actions">
                <?php edit_post_link(__('Edit'), '<button class="edit">','</button>' ); ?>
            </div>
        </article>

        <?php endwhile; else : ?>
            <p><?php _e( 'Sorry, no posts found.' ); ?></p>
        <?php endif; ?>
        <!-- Loop Ends Here -->
    </div>
</main>

<?php get_footer(); ?>
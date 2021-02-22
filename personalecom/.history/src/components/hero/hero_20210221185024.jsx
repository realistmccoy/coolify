import React from 'react';
import './hero.styles.scss'

const Hero = () => {
  return (
    Helpers
Hero

An imposing hero banner to showcase something

Get 750 hours of virtual machine compute time, free each month for a year.
ads via Carbon
The hero component allows you to add a full width banner to your webpage, which can optionally cover the full height of the page as well.

The basic requirement of this component are:

hero as the main container
hero-body as a direct child, in which you can put all your content
For the fullheight hero to work, you will also need a hero-head and a hero-foot.

Example
Hero title

Hero subtitle

HTML
<section class="hero">
  <div class="hero-body">
    <p class="title">
      Hero title
    </p>
    <p class="subtitle">
      Hero subtitle
    </p>
  </div>
</section>
Colors#
As with buttons, you can choose one of the 8 different colors:
Example
Primary hero

Primary subtitle

HTML
<section class="hero is-primary">
  <div class="hero-body">
    <p class="title">
      Primary hero
    </p>
    <p class="subtitle">
      Primary subtitle
    </p>
  </div>
</section>
Example
Link hero

Link subtitle

HTML
<section class="hero is-link">
  <div class="hero-body">
    <p class="title">
      Link hero
    </p>
    <p class="subtitle">
      Link subtitle
    </p>
  </div>
</section>
Example
Info hero

Info subtitle

HTML
<section class="hero is-info">
  <div class="hero-body">
    <p class="title">
      Info hero
    </p>
    <p class="subtitle">
      Info subtitle
    </p>
  </div>
</section>
Example
Success hero

Success subtitle

HTML
<section class="hero is-success">
  <div class="hero-body">
    <p class="title">
      Success hero
    </p>
    <p class="subtitle">
      Success subtitle
    </p>
  </div>
</section>
Example
Warning hero

Warning subtitle

HTML
<section class="hero is-warning">
  <div class="hero-body">
    <p class="title">
      Warning hero
    </p>
    <p class="subtitle">
      Warning subtitle
    </p>
  </div>
</section>
Example
Danger hero

Danger subtitle

HTML
<section class="hero is-danger">
  <div class="hero-body">
    <p class="title">
      Danger hero
    </p>
    <p class="subtitle">
      Danger subtitle
    </p>
  </div>
</section>
Sizes#
You can have even more imposing banners by using one of 5 different sizes:

is-small
is-medium
is-large
is-halfheight
is-fullheight
Example
Small hero

Small subtitle

HTML
<section class="hero is-small is-primary">
  <div class="hero-body">
    <p class="title">
      Small hero
    </p>
    <p class="subtitle">
      Small subtitle
    </p>
  </div>
</section>
Example
Medium hero

Medium subtitle

HTML
<section class="hero is-medium is-link">
  <div class="hero-body">
    <p class="title">
      Medium hero
    </p>
    <p class="subtitle">
      Medium subtitle
    </p>
  </div>
</section>
Example
Large hero

Large subtitle

HTML
<section class="hero is-large is-info">
  <div class="hero-body">
    <p class="title">
      Large hero
    </p>
    <p class="subtitle">
      Large subtitle
    </p>
  </div>
</section>
  )
}
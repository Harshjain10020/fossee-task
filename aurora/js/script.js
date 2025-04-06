/**
 * @file
 * Custom JavaScript for Aurora theme.
 */
(function ($, Drupal) {
    'use strict';
  
    Drupal.behaviors.auroraTheme = {
      attach: function (context, settings) {
        // Mobile menu toggle
        $('.menu-toggle', context).once('menu-toggle').on('click', function () {
          $('.navigation').toggleClass('menu-open');
        });
        
        // Add your custom JavaScript functionalities here
      }
    };
  })(jQuery, Drupal);
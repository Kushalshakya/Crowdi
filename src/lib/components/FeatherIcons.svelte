<script>
    import feather from 'feather-icons';
  
    export let name;
    export let size = 18;
    export let strokeWidth = 2;
    export let className = '';
  </script>
  
  <div class={className}>
    {@html feather.icons[name]?.toSvg({ 
      width: size, 
      height: size, 
      'stroke-width': strokeWidth 
    }) || ''}
  </div>
  
  <style>
    div {
      display: inline-block;
    }
  </style>
  
/**
 * BLOCK: magic-numbers
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType, source  } = wp.blocks;
const { RichText, InspectorControls } = wp.editor;
const { PanelBody, TextControl } = wp.components;
// Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cooltech/block-magic-numbers', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Magic Numbers' ), // Block title.
	icon: 'palmtree', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Cooltech' ),
		__( '' ),
		__( '' ),
	],
  attributes: {
            numb: {
                selector: '#mn1', // tag a
                source: 'children',  // children of a, to bind the link text
            },
            numb2: {
                selector: '#mn2', // tag a
                source: 'children',  // children of a, to bind the link text
            },
            numb3: {
                selector: '#mn3', // tag a
                source: 'children',  // children of a, to bind the link text
            },
            txt1: {
              selector: '#mt1', // tag a
              source: 'children',
            },
            txt2: {
              selector: '#mt2', // tag a
              source: 'children',
            },
            txt3: {
              selector: '#mt3', // tag a
              source: 'children',
            },
            symb1: {
              selector: '#symb1',
              source: 'children'
            },
            symb2: {
              selector: '#symb2',
              source: 'children'
            },
            symb3: {
              selector: '#symb3',
              source: 'children'
            },
  },

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => {

    let numb = props.attributes.numb // To bind attribute link_text
    let numb2 = props.attributes.numb2
    let numb3 = props.attributes.numb3

    let txt1 = props.attributes.txt1
    let txt2 = props.attributes.txt2
    let txt3 = props.attributes.txt3

    let symb1 = props.attributes.symb1
    let symb2 = props.attributes.symb2
    let symb3 = props.attributes.symb3

    function onChangeContentNumb ( content ) {
        props.setAttributes({numb: content})
    }
    function onChangeContentNumb2 ( content ) {
         props.setAttributes({numb2: content})
     }
     function onChangeContentNumb3 ( content ) {
          props.setAttributes({numb3: content})
      }
      function onChangeContentTxt1 ( content ) {
          props.setAttributes({txt1: content})
      }
      function onChangeContentTxt2 ( content ) {
          props.setAttributes({txt2: content})
      }
      function onChangeContentTxt3 ( content ) {
          props.setAttributes({txt3: content})
      }
      function onChangeContentSymb1 ( content ) {
          props.setAttributes({symb1: content})
      }
      function onChangeContentSymb2 ( content ) {
          props.setAttributes({symb2: content})
      }
      function onChangeContentSymb3 ( content ) {
          props.setAttributes({symb3: content})
      }

		// Creates a <p class='wp-block-cgb-block-magic-numbers'></p>.
		return (
			<div className={ "magic-number-editor editor-block-list__block block-editor-block-list__block "+props.className }>
        <div class="">
          <RichText className={props.className} onChange={onChangeContentNumb} value={numb} placeholder="Number" />
          <RichText className={props.className} onChange={onChangeContentSymb1} value={symb1} placeholder="Symbol" />
          <RichText className={props.className} onChange={onChangeContentTxt1} value={txt1} placeholder="Text" />
        </div>
        <div class="">
          <RichText className={props.className} onChange={onChangeContentNumb2} value={numb2} placeholder="Number" />
          <RichText className={props.className} onChange={onChangeContentSymb2} value={symb2} placeholder="Symbol" />
          <RichText className={props.className} onChange={onChangeContentTxt2} value={txt2} placeholder="Text" />
        </div>
        <div class="">
          <RichText className={props.className} onChange={onChangeContentNumb3} value={numb3} placeholder="Number" />
          <RichText className={props.className} onChange={onChangeContentSymb3} value={symb3} placeholder="Symbol" />
          <RichText className={props.className} onChange={onChangeContentTxt3} value={txt3} placeholder="Text" />
        </div>

      </div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {
		return (
      <section>
			<div className={ props.className }>
        <div class="container">
        <div class="row">
          <div class="col-md-4">
                <div class="magic-up">
    			       <div id="mn1" class="magic-number">{props.attributes.numb}</div>
                 <div id="symb1" class="magic-value">{props.attributes.symb1}</div>
                </div>
             <div id="mt1" class="magic-text">{props.attributes.txt1}</div>
          </div>
          <div class="col-md-4">
                <div class="magic-up">
                 <div id="mn2" class="magic-number">{props.attributes.numb2} </div>
                 <div id="symb2" class="magic-value">{props.attributes.symb2}</div>
                </div>
             <div id="mt2" class="magic-text">{props.attributes.txt2}</div>
          </div>
          <div class="col-md-4">
            <div class="magic-up">
             <div id="mn3" class="magic-number">{props.attributes.numb3}</div>
             <div id="symb3" class="magic-value">{props.attributes.symb3}</div>
            </div>
             <div id="mt3" class="magic-text">{props.attributes.txt3}</div>
          </div>
        </div>
       </div>
			</div>
      </section>
		);
	},
} );

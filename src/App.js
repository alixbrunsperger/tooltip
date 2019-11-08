import React from 'react';
import Button from './components/Button';
import ToolTip from './components/ToolTip';
import { getIconsAndTexts, getLoremIpsum } from './utils/utils'

function App() {
  return (
    <div>
      <div className='container shadow'>
        <div className='button_container element1'>
          <ToolTip variant='topLeft' type='tooltip-text'>
            {getLoremIpsum()}
            </ToolTip>
          <Button classNameAddon='confirm'>some button</Button>
        </div>
        <div className='button_container element2'>
          <ToolTip variant='topCenter' type='tooltip-text'>
            {getLoremIpsum()}
            </ToolTip>
          <Button classNameAddon='confirm'>some button</Button>
        </div>
        <div className='button_container element3'>
          <ToolTip variant='topRight' type='tooltip-text'>
            {getLoremIpsum()}
            </ToolTip>
          <Button classNameAddon='confirm'>some button</Button>
        </div>
        <div className='button_container element4'>
          <ToolTip variant='centerLeft' type='tooltip-text'>
            {getLoremIpsum()}
            </ToolTip>
          <Button classNameAddon='confirm'>some button</Button>
        </div>
        <div className='button_container element5'>
          <ToolTip variant='centerRight' type='tooltip-text'>
            {getLoremIpsum()}
            </ToolTip>
          <Button classNameAddon='confirm'>some button</Button>
        </div>
        <div className='button_container element6'>
          <ToolTip variant='bottomLeft' type='tooltip-text'>
            {getLoremIpsum()}
            </ToolTip>
          <Button classNameAddon='confirm'>some button</Button>
        </div>
        <div className='button_container element7'>
          <ToolTip variant='bottomCenter' type='tooltip-text'>
            {getLoremIpsum()}
            </ToolTip>
          <Button classNameAddon='confirm'>some button</Button>
        </div>
        <div className='button_container element8'>
          <ToolTip variant='bottomRight' type='tooltip-text'>
            {getLoremIpsum()}
            </ToolTip>
          <Button classNameAddon='confirm'>some button</Button>
        </div>
      </div>

      <div className='container shadow'>
        <div className='button_container element1'>
          <ToolTip variant='topLeft' type='tooltip-elements tooltip-icons'>
            {getIconsAndTexts()}
          </ToolTip>
          <Button classNameAddon='confirm'>some button</Button>
        </div>
        <div className='button_container element2'>
        <ToolTip variant='topCenter' type='tooltip-elements tooltip-icons'>
            {getIconsAndTexts()}
          </ToolTip>
          <Button classNameAddon='confirm'>some button</Button>
        </div>
        <div className='button_container element3'>
        <ToolTip variant='topRight' type='tooltip-elements tooltip-icons'>
            {getIconsAndTexts()}
          </ToolTip>
          <Button classNameAddon='confirm'>some button</Button>
        </div>
        <div className='button_container element4'>
        <ToolTip variant='centerLeft' type='tooltip-elements tooltip-icons'>
            {getIconsAndTexts()}
          </ToolTip>
          <Button classNameAddon='confirm'>some button</Button>
        </div>
        <div className='button_container element5'>
        <ToolTip variant='centerRight' type='tooltip-elements tooltip-icons'>
            {getIconsAndTexts()}
          </ToolTip>
          <Button classNameAddon='confirm'>some button</Button>
        </div>
        <div className='button_container element6'>
        <ToolTip variant='bottomLeft' type='tooltip-elements tooltip-icons'>
            {getIconsAndTexts()}
          </ToolTip>
          <Button classNameAddon='confirm'>some button</Button>
        </div>
        <div className='button_container element7'>
        <ToolTip variant='bottomCenter' type='tooltip-elements tooltip-icons'>
            {getIconsAndTexts()}
          </ToolTip>
          <Button classNameAddon='confirm'>some button</Button>
        </div>
        <div className='button_container element8'>
        <ToolTip variant='bottomRight' type='tooltip-elements tooltip-icons'>
            {getIconsAndTexts()}
          </ToolTip>
          <Button classNameAddon='confirm'>some button</Button>
        </div>
      </div>

      <div className='container shadow'>
        <div className='button_container element1'>
          <div className='tooltip tooltip-elements tooltip-buttons shadow top left'>
            <Button classNameAddon='confirm'>confirm</Button>
            <Button classNameAddon='cancel'>cancel</Button>
          </div>
          <Button classNameAddon='confirm'>some button</Button>
        </div>
        <div className='button_container element2'>
          <div className='tooltip tooltip-elements tooltip-buttons shadow top center'>
            <Button classNameAddon='confirm'>confirm</Button>
            <Button classNameAddon='cancel'>cancel</Button>
          </div>
          <Button classNameAddon='confirm'>some button</Button>
        </div>
        <div className='button_container element3'>
          <div className='tooltip tooltip-elements tooltip-buttons shadow top right'>
            <Button classNameAddon='confirm'>confirm</Button>
            <Button classNameAddon='cancel'>cancel</Button>
          </div>
          <Button classNameAddon='confirm'>some button</Button>
        </div>
        <div className='button_container element4'>
          <div className='tooltip tooltip-elements tooltip-buttons shadow center left'>
            <Button classNameAddon='confirm'>confirm</Button>
            <Button classNameAddon='cancel'>cancel</Button>
          </div>
          <Button classNameAddon='confirm'>some button</Button>
        </div>
        <div className='button_container element5'>
          <div className='tooltip tooltip-elements tooltip-buttons shadow center right'>
            <Button classNameAddon='confirm'>confirm</Button>
            <Button classNameAddon='cancel'>cancel</Button>
          </div>
          <Button classNameAddon='confirm'>some button</Button>
        </div>
        <div className='button_container element6'>
          <div className='tooltip tooltip-elements tooltip-buttons shadow bottom left'>
            <Button classNameAddon='confirm'>confirm</Button>
            <Button classNameAddon='cancel'>cancel</Button>
          </div>
          <Button classNameAddon='confirm'>some button</Button>
        </div>
        <div className='button_container element7'>
          <div className='tooltip tooltip-elements tooltip-buttons shadow bottom center'>
            <Button classNameAddon='confirm'>confirm</Button>
            <Button classNameAddon='cancel'>cancel</Button>
          </div>
          <Button classNameAddon='confirm'>some button</Button>
        </div>
        <div className='button_container element8'>
          <div className='tooltip tooltip-elements tooltip-buttons shadow bottom right'>
            <Button classNameAddon='confirm'>confirm</Button>
            <Button classNameAddon='cancel'>cancel</Button>
          </div>
          <Button classNameAddon='confirm'>some button</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
